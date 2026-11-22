// Site search in the header, the "help me choose" sentence and its lists.
// Without JavaScript every page still works: the sentence stays hidden and
// all lists are shown in full.

// ---- shared: typo-tolerant matching ------------------------------------------
// lower case, without accents (é → e) or Arabic vowel marks
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, "");
// split into words; works for every alphabet (Latin, Arabic, …)
const wordsOf = (s) => s.split(/[^\p{L}\p{N}]+/u).filter(Boolean);

// true when a and b differ by at most one letter (typo tolerance)
function near(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a[i] === b[j + 1] && a[i + 1] === b[j]) { i += 2; j += 2; } // swapped letters
    else if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else { i++; j++; }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}
// every query word appears in the text, or is one typo away from one of its words
function matches(text, tokens, words) {
  return words.every((w) => text.includes(w) ||
    (w.length >= 4 && tokens.some((t) => near(t, w) ||
      (t.length > w.length && (near(t.slice(0, w.length), w) || near(t.slice(0, w.length + 1), w))))));
}

// ---- site search in the header ------------------------------------------------
(function () {
  const q = document.getElementById("q");
  const hits = document.getElementById("hits");
  const link = document.getElementById("search-index");
  if (!q || !hits || !link) return;
  let index = null;
  const load = () => index || (index = fetch(link.href).then((r) => r.json()).then((items) =>
    items.map((x) => ({ ...x, text: norm(x.t + " " + x.d), tokens: wordsOf(norm(x.t + " " + x.d)) }))
  ).catch(() => []));
  q.addEventListener("focus", load);
  q.addEventListener("input", async () => {
    const words = norm(q.value).split(/\s+/).filter(Boolean);
    if (!words.length) { hits.hidden = true; return; }
    const items = await load();
    const found = items.filter((x) => matches(x.text, x.tokens, words))
      .sort((a, b) => (a.x || 0) - (b.x || 0) || (norm(a.t).includes(words[0]) ? -1 : 1)).slice(0, 8);
    hits.replaceChildren(...(found.length ? found.map((x) => {
      const li = document.createElement("li"), a = document.createElement("a"), small = document.createElement("small");
      a.href = x.u; a.textContent = `${x.i} ${x.t}`; if (x.x) a.rel = "noopener";
      small.textContent = x.d; a.append(small); li.append(a); return li;
    }) : [Object.assign(document.createElement("li"), { className: "none", textContent: q.dataset.empty })]));
    hits.hidden = false;
  });
  q.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { hits.hidden = true; q.blur(); }
    if (e.key === "Enter") { const a = hits.querySelector("a"); if (a) location.href = a.href; }
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search")) hits.hidden = true; });
})();

// ---- language menu: close it when tapping elsewhere or pressing Escape ---------
(function () {
  const menu = document.querySelector("details.lang");
  if (!menu) return;
  document.addEventListener("click", (e) => { if (!menu.contains(e.target)) menu.open = false; });
  menu.addEventListener("keydown", (e) => { if (e.key === "Escape") { menu.open = false; menu.querySelector("summary").focus(); } });
})();

// ---- "help me choose" -----------------------------------------------------------
(function () {
  const finder = document.getElementById("finder");
  if (!finder) return;
  const match = document.getElementById("match");
  const waiting = document.getElementById("waiting");
  const results = document.getElementById("results");
  const list = document.getElementById("res-list");
  const closest = document.getElementById("closest");
  const allRows = [...document.querySelectorAll(".browse .row")];
  const nowLinks = [...results.querySelectorAll(".now li")];
  const MAX = 6;

  finder.hidden = false;
  match.hidden = false;

  // ---- the two blanks -------------------------------------------------------
  const slots = [...finder.querySelectorAll(".slot")];
  const value = (name) => (finder.elements[name] && finder.elements[name].value) || "";

  // A filled blank shows only the chosen answer, so the sentence reads as one line.
  function close(slot) {
    const chosen = slot.querySelector("input:checked");
    slot.classList.toggle("filled", !!chosen);
    slot.querySelector(".edit").hidden = !chosen;
    for (const l of slot.querySelectorAll(".pill")) l.hidden = !!chosen && !l.querySelector("input").checked;
  }
  function open(slot) {
    slot.classList.remove("filled");
    slot.querySelector(".edit").hidden = true;
    for (const l of slot.querySelectorAll(".pill")) l.hidden = false;
    (slot.querySelector("input:checked") || slot.querySelector("input")).focus();
  }
  for (const slot of slots) {
    slot.querySelector(".edit").addEventListener("click", () => open(slot));
    // Tapping the chosen answer again also reopens the blank.
    slot.addEventListener("click", (e) => {
      const label = e.target.closest(".pill");
      if (label && slot.classList.contains("filled") && label.querySelector("input").checked) {
        e.preventDefault();
        open(slot);
      }
    });
  }

  // ---- results ----------------------------------------------------------------
  function show(scroll) {
    const speak = value("speak"), way = value("way");
    for (const slot of slots) close(slot);
    const done = speak && way;
    waiting.hidden = !!done;
    results.hidden = !done;
    if (!done) return;

    const want = finder.querySelector(`input[name=speak][value="${speak}"]`).dataset.levels.split(" ");
    const order = ["A0", "A1", "A2", "B1", "B2"];
    // distance between the levels wanted and the levels a resource covers (0 = overlap)
    const dist = (row) => {
      const lv = row.dataset.levels.split(" ").map((l) => order.indexOf(l));
      const wv = want.map((l) => order.indexOf(l));
      return Math.min(...lv.flatMap((a) => wv.map((b) => Math.abs(a - b))));
    };
    const fits = allRows
      .filter((r) => r.dataset.ways.split(" ").includes(way))
      .map((r) => ({ r, d: dist(r), rank: +r.dataset.rank }));
    const exact = fits.filter((x) => x.d === 0);
    const pick = (exact.length ? exact : fits)
      .sort((a, b) => a.d - b.d || b.rank - a.rank)
      .slice(0, MAX);
    closest.hidden = exact.length > 0;
    list.replaceChildren(...pick.map((x) => x.r.cloneNode(true)));
    for (const li of nowLinks) li.hidden = li.dataset.way !== way;

    const p = new URLSearchParams({ speak, way });
    history.replaceState(null, "", location.pathname + "?" + p);
    if (scroll) {
      const top = results.getBoundingClientRect().top;
      if (top > window.innerHeight * 0.6) results.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  finder.addEventListener("change", () => show(true));
  finder.addEventListener("submit", (e) => e.preventDefault());

  // Restore a shared choice from the address
  const params = new URLSearchParams(location.search);
  for (const name of ["speak", "way"]) {
    const v = params.get(name);
    const input = v && finder.querySelector(`input[name=${name}][value="${CSS.escape(v)}"]`);
    if (input) input.checked = true;
  }
  show(false);

  document.getElementById("share").addEventListener("click", async (e) => {
    const url = location.href;
    if (navigator.share) {
      try { await navigator.share({ title: document.title, url }); } catch {}
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      const b = e.currentTarget, old = b.textContent;
      b.textContent = finder.dataset.copied;
      setTimeout(() => (b.textContent = old), 2000);
    } catch { prompt("", url); }
  });

  // ---- search in "browse everything" -----------------------------------------
  const find = document.getElementById("find");
  const groups = [...document.querySelectorAll(".browse .group")];
  const none = document.getElementById("none");
  const hit = (row, words) => matches(row.dataset.text, (row._t ||= wordsOf(row.dataset.text)), words);

  find.addEventListener("input", () => {
    const words = norm(find.value).split(/\s+/).filter(Boolean);
    let total = 0;
    for (const g of groups) {
      let n = 0;
      for (const row of g.querySelectorAll(".row")) {
        const ok = !words.length || hit(row, words);
        row.hidden = !ok;
        if (ok) n++;
      }
      total += n;
      g.hidden = n === 0;
      g.open = words.length > 0 && n > 0;
    }
    none.hidden = total > 0;
  });
})();

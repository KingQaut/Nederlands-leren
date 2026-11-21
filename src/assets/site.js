// Filters, search, share and print for the resource list.
// Without JavaScript the full list is simply shown.
(function () {
  const form = document.getElementById("filters");
  if (!form) return;
  const cards = [...document.querySelectorAll("#cards > .card")];
  const now = [...document.querySelectorAll(".now li")];
  const count = document.getElementById("count");
  const none = document.getElementById("none");
  const keys = ["cat", "q", "level", "cost", "format", "where"];
  form.hidden = false;

  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

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

  function matchesText(text, words, query) {
    // A word matches when it appears in the text, or is one typo away from
    // a word (or the start of a longer word) in the text.
    return query.every((w) => text.includes(w) ||
      (w.length >= 4 && words.some((t) => near(t, w) || (t.length > w.length && near(t.slice(0, w.length), w)))));
  }

  function state() {
    const f = new FormData(form);
    return Object.fromEntries(keys.map((k) => [k, (f.get(k) || "").trim()]));
  }

  function apply(push) {
    const s = state();
    const query = norm(s.q).split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const c of cards) {
      const d = c.dataset;
      const ok =
        (!s.cat || d.cat === s.cat) &&
        (!s.level || d.levels.split(" ").includes(s.level)) &&
        (!s.cost || d.cost === s.cost) &&
        (!s.format || d.formats.split(" ").includes(s.format)) &&
        (!s.where || d.where === s.where) &&
        (!query.length || matchesText(d.text, (c._words ||= d.text.split(/[^a-z0-9]+/)), query));
      c.hidden = !ok;
      if (ok) shown++;
    }
    for (const n of now) n.hidden = !!s.cat && n.dataset.cat !== s.cat;
    count.textContent = shown === 1 ? form.dataset.countOne : form.dataset.count.replace("{n}", shown);
    none.hidden = shown > 0;
    if (push) {
      const p = new URLSearchParams();
      for (const k of keys) if (s[k]) p.set(k, s[k]);
      const qs = p.toString();
      history.replaceState(null, "", location.pathname + (qs ? "?" + qs : ""));
    }
  }

  // Restore filters from the address (shared links)
  const params = new URLSearchParams(location.search);
  for (const k of keys) {
    const v = params.get(k);
    if (v == null) continue;
    const el = form.elements[k];
    if (!el) continue;
    if (el instanceof RadioNodeList) { for (const r of el) r.checked = r.value === v; }
    else el.value = v;
  }

  form.addEventListener("input", () => apply(true));
  form.addEventListener("change", () => apply(true));
  form.addEventListener("submit", (e) => e.preventDefault());
  form.addEventListener("reset", () => setTimeout(() => apply(true)));

  document.getElementById("share").addEventListener("click", async (e) => {
    const url = location.href;
    if (navigator.share) {
      try { await navigator.share({ title: document.title, url }); } catch {}
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      const b = e.currentTarget, old = b.textContent;
      b.textContent = form.dataset.copied;
      setTimeout(() => (b.textContent = old), 2000);
    } catch { prompt("", url); }
  });
  document.getElementById("print").addEventListener("click", () => window.print());

  apply(false);
})();

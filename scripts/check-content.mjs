// Checks content/resources.js, the topics and all translations before they are published. Run: npm run check
// Exits with an error (and a list of problems) if anything is wrong.
import { resources, generated } from "../content/resources.js";
import { sections } from "../content/topics.js";
import { raw as site } from "../src/_lib/site-texts.js";

const L = site.labels;
const LANGS = site.languages.map((l) => l.code);
// Dutch and English are required. Other languages are added only when the owner asks;
// until then the site shows the English text, so a missing one is only reported.
const REQUIRED = ["nl", "en"];
const untranslated = new Map(); // language -> number of texts shown in English
const errors = [], warnings = [];
const topicKeys = new Set(sections.flatMap((s) => s.topics.map((t) => t.key)));
const one = (set) => (v) => set.includes(v);
const ok = {
  cat: one(Object.keys(L.cat)),
  level: one(L.levels),
  cost: one(Object.keys(L.cost)),
  fmt: one(Object.keys(L.fmt)),
  lang: one(Object.keys(L.lang)),
  where: one(Object.keys(L.where)),
  trust: one(Object.keys(L.trust)),
};
const words = (s) => (s || "").trim().split(/\s+/).filter(Boolean).length;

if (!/^\d{4}-\d{2}-\d{2}$/.test(generated)) errors.push(`generated must be a date like 2026-12-01, is "${generated}"`);
if (resources.length < 15) errors.push(`only ${resources.length} resources; expected at least 15`);

const names = new Set(), urls = new Set();
for (const r of resources) {
  const id = r.name || "(no name)";
  const e = (m) => errors.push(`${id}: ${m}`);
  if (!r.name) e("missing name");
  if (names.has(r.name)) e("duplicate name"); names.add(r.name);
  // Owner-curated entries may use http:// (some small providers have no working https).
  if (!(r.curated ? /^https?:\/\/[^\s"]+$/ : /^https:\/\/[^\s"]+$/).test(r.url || "")) e(`url must start with https:// (${r.url})`);
  if ("curated" in r && r.curated !== true) e("curated must be true or left out");
  if (urls.has(r.url)) e("duplicate url"); urls.add(r.url);
  if (!Array.isArray(r.topics) || !r.topics.length) e("needs at least one topic");
  else for (const t of r.topics) if (!topicKeys.has(t)) e(`unknown topic "${t}"`);
  if (!ok.cat(r.cat)) e(`unknown cat "${r.cat}"`);
  if (!Array.isArray(r.levels) || !r.levels.length) e("needs at least one level");
  else for (const l of r.levels) if (!ok.level(l)) e(`unknown level "${l}"`);
  if (!ok.cost(r.cost)) e(`cost must be free or paid, is "${r.cost}"`);
  if (!Array.isArray(r.formats) || !r.formats.length) e("needs at least one format");
  else for (const f of r.formats) if (!ok.fmt(f)) e(`unknown format "${f}"`);
  if (!Array.isArray(r.langs) || !r.langs.length) e("needs at least one language in langs");
  else for (const l of r.langs) if (!ok.lang(l)) e(`unknown language "${l}" (add it to labels.lang in src/_lib/site-texts.js first)`);
  if (!ok.where(r.where)) e(`unknown where "${r.where}"`);
  if (!ok.trust(r.trust)) e(`unknown trust "${r.trust}"`);
  for (const lang of LANGS) {
    const n = words(r.sum && r.sum[lang]);
    if (!n && !REQUIRED.includes(lang)) untranslated.set(lang, (untranslated.get(lang) || 0) + 1);
    else if (!n) e(`missing ${lang} summary`);
    else if (n > 35) e(`${lang} summary is ${n} words; keep it under 30`);
  }
  // Inburgering is deferred by the owner: no inburgering content for now.
  const text = [r.name, r.url, r.sum && r.sum.nl, r.sum && r.sum.en].join(" ").toLowerCase();
  if (/inburger|civic integration/.test(text)) e("mentions inburgering / civic integration, which is deferred");
}

// Every text in topics.js and site.js needs every site language.
const need = (where, obj) => {
  for (const l of LANGS) if (!obj || !String(obj[l] || "").trim()) {
    if (REQUIRED.includes(l)) errors.push(`${where}: missing ${l} text`);
    else untranslated.set(l, (untranslated.get(l) || 0) + 1);
  }
};
for (const s of sections) {
  for (const f of ["title", "kicker", "intro"]) need(`section "${s.key}" ${f}`, s[f]);
  for (const t of s.topics) {
    for (const f of ["title", "intro"]) need(`topic "${t.key}" ${f}`, t[f]);
    if (t.liveText) need(`topic "${t.key}" liveText`, t.liveText);
    for (const x of t.live || []) need(`topic "${t.key}" search button "${x.q}"`, x.t);
  }
}
for (const group of ["cat", "cost", "fmt", "where", "trust", "speak", "ways"])
  for (const [k, v] of Object.entries(L[group])) {
    need(`labels.${group}.${k}`, v);
    if (v.title) need(`labels.${group}.${k}.title`, v.title);
  }
for (const l of LANGS) {
  if (!site.ui[l]) { errors.push(`site.js: no interface texts (ui.${l})`); continue; }
  for (const k of Object.keys(site.ui.nl)) if (!(k in site.ui[l])) {
    if (REQUIRED.includes(l)) errors.push(`site.js: ui.${l}.${k} is missing`);
    else untranslated.set(l, (untranslated.get(l) || 0) + 1);
  }
}

for (const s of sections) for (const t of s.topics) {
  const n = resources.filter((r) => (r.topics || []).includes(t.key)).length;
  if (n === 0) errors.push(`topic "${t.key}" has no resources`);
  else if (n < 2) warnings.push(`topic "${t.key}" has only ${n} resource`);
}
for (const n of ["Oefenen.nl", "Het Begint met Taal", "Bibliotheek: Taalhuis en taalcafé"])
  if (!names.has(n)) errors.push(`"${n}" is shown on the home page (quickNames in src/_data/library.js) but is missing`);

// Eleventy data files must have only a default export (see src/_data/site.js);
// otherwise the templates silently get empty texts.
import { readdirSync } from "node:fs";
for (const f of readdirSync(new URL("../src/_data/", import.meta.url)).filter((f) => f.endsWith(".js"))) {
  const extra = Object.keys(await import(`../src/_data/${f}`)).filter((k) => k !== "default");
  if (extra.length) errors.push(`src/_data/${f} must only have a default export, but also exports: ${extra.join(", ")}`);
}

for (const [l, n] of untranslated) console.log(`note: ${n} text(s) not yet in "${l}"; the site shows English there.`);
for (const w of warnings) console.log("warning:", w);
if (errors.length) {
  console.error(`\n${errors.length} problem(s) in content/resources.js:`);
  for (const x of errors) console.error(" -", x);
  process.exit(1);
}
console.log(`OK: ${resources.length} resources in ${LANGS.length} languages (${LANGS.join(", ")}), generated ${generated}.`);

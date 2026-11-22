// Checks content/resources.js before it is published. Run: npm run check
// Exits with an error (and a list of problems) if anything is wrong.
import { resources, generated } from "../content/resources.js";
import { sections } from "../content/topics.js";
import site from "../src/_data/site.js";

const L = site.labels;
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
  if (!/^https:\/\/[^\s"]+$/.test(r.url || "")) e(`url must start with https:// (${r.url})`);
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
  else for (const l of r.langs) if (!ok.lang(l)) e(`unknown language "${l}" (add it to labels.lang in src/_data/site.js first)`);
  if (!ok.where(r.where)) e(`unknown where "${r.where}"`);
  if (!ok.trust(r.trust)) e(`unknown trust "${r.trust}"`);
  for (const lang of ["nl", "en"]) {
    const n = words(r.sum && r.sum[lang]);
    if (!n) e(`missing ${lang} summary`);
    else if (n > 35) e(`${lang} summary is ${n} words; keep it under 30`);
  }
  // Inburgering is deferred by the owner: no inburgering content for now.
  const text = [r.name, r.url, r.sum && r.sum.nl, r.sum && r.sum.en].join(" ").toLowerCase();
  if (/inburger|civic integration/.test(text)) e("mentions inburgering / civic integration, which is deferred");
}

for (const s of sections) for (const t of s.topics) {
  const n = resources.filter((r) => (r.topics || []).includes(t.key)).length;
  if (n === 0) errors.push(`topic "${t.key}" has no resources`);
  else if (n < 2) warnings.push(`topic "${t.key}" has only ${n} resource`);
}
for (const n of ["Oefenen.nl", "Het Begint met Taal", "Bibliotheek: Taalhuis en taalcafé"])
  if (!names.has(n)) errors.push(`"${n}" is shown on the home page (quickNames in src/_data/library.js) but is missing`);

for (const w of warnings) console.log("warning:", w);
if (errors.length) {
  console.error(`\n${errors.length} problem(s) in content/resources.js:`);
  for (const x of errors) console.error(" -", x);
  process.exit(1);
}
console.log(`OK: ${resources.length} resources, generated ${generated}.`);

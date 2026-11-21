// Turns the content files into everything the templates need: sections, topic
// pages, URLs in both languages, the "help me choose" data and the search index.
// (Named library.js, not content.js: that name clashes with the layout's `content`.)
import { resources as raw, generated } from "../../content/resources.js";
import { sections as rawSections } from "../../content/topics.js";

const LANGS = ["nl", "en"];
const fixed = {
  home: { nl: "/", en: "/en/" },
  about: { nl: "/over/", en: "/en/about/" },
  choose: { nl: "/kiezen/", en: "/en/choose/" },
};
const pre = (lang) => (lang === "nl" ? "/" : "/en/");
const other = (lang) => (lang === "nl" ? "en" : "nl");

// ---- "help me choose": which way of learning each resource fits -------------
const has = (r, ...f) => r.formats.some((x) => f.includes(x));
function waysOf(r) {
  const w = [];
  if (r.cat === "children") w.push("kids");
  if (r.cat === "literacy") w.push("read");
  if (r.cat === "speaking") w.push("people");
  if (["courses", "exam"].includes(r.cat) || (r.cat !== "speaking" && has(r, "class", "online"))) w.push("course");
  if (["start", "exam", "work"].includes(r.cat) && has(r, "app", "website", "video")) w.push("phone");
  return w.length ? w : ["phone"];
}
// Higher = shown first: free first, then trusted public providers.
const trustRank = { official: 3, library: 3, ngo: 2, university: 2, quality: 1, community: 1, app: 1 };
const rank = (r) => (r.cost === "free" ? 10 : 0) + (trustRank[r.trust] || 0);

const resources = raw
  .map((r) => ({ ...r, ways: waysOf(r), rank: rank(r) }))
  .sort((a, b) => b.rank - a.rank);

// ---- sections and topics, with URLs in both languages ------------------------
const sections = rawSections.map((s) => {
  const url = Object.fromEntries(LANGS.map((l) => [l, `${pre(l)}${s.slug[l]}/`]));
  const topics = s.topics.map((t) => ({
    ...t,
    section: s.key,
    url: Object.fromEntries(LANGS.map((l) => [l, `${url[l]}${t.slug[l]}/`])),
    resources: resources.filter((r) => r.topics.includes(t.key)),
    live: t.live || [],
    hasPaid: resources.some((r) => r.topics.includes(t.key) && r.cost === "paid"),
  }));
  return { ...s, url, topics };
});
const allTopics = sections.flatMap((s) => s.topics);

// One page object per language; every page knows its own and its other-language URL.
const page = (lang, url, alt, extra) => ({
  lang, url, alt, home: fixed.home[lang], about: fixed.about[lang], choose: fixed.choose[lang], ...extra,
});
const pages = LANGS.map((l) => page(l, fixed.home[l], fixed.home[other(l)]));
const aboutPages = LANGS.map((l) => page(l, fixed.about[l], fixed.about[other(l)]));
const choosePages = LANGS.map((l) => page(l, fixed.choose[l], fixed.choose[other(l)]));
const sectionPages = sections.flatMap((s) => LANGS.map((l) => page(l, s.url[l], s.url[other(l)], { section: s })));
const topicPages = allTopics.flatMap((t) =>
  LANGS.map((l) => page(l, t.url[l], t.url[other(l)], { topic: t, section: sections.find((s) => s.key === t.section) }))
);

// "Search now" buttons on the help-me-choose page, by way of learning.
const wayOfTopic = { talk: "people", course: "course", onlineclass: "course" };
const searchNow = allTopics.flatMap((t) => (t.live || []).map((x) => ({ ...x, way: wayOfTopic[t.key] || "course" })));

// Shown as "start today, for free".
const quickNames = ["Oefenen.nl", "Het Begint met Taal", "Bibliotheek: Taalhuis en taalcafé"];

// Site search: sections, topics and resources.
const search = Object.fromEntries(
  LANGS.map((l) => [l, [
    ...sections.map((s) => ({ t: s.title[l], u: s.url[l], d: s.intro[l], i: s.icon })),
    ...allTopics.map((t) => ({ t: t.title[l], u: t.url[l], d: t.intro[l], i: t.icon })),
    ...resources.map((r) => ({ t: r.name, u: r.url, d: r.sum[l], i: "↗", x: 1 })),
  ]])
);

// Resources per way of learning, for the help-me-choose page.
const groups = Object.fromEntries(
  ["phone", "people", "course", "read", "kids"].map((w) => [w, resources.filter((r) => r.ways[0] === w)])
);

export default {
  generated,
  resources,
  sections,
  groups,
  searchNow,
  search,
  quick: quickNames.map((n) => resources.find((r) => r.name === n)).filter(Boolean),
  pages,
  aboutPages,
  choosePages,
  sectionPages,
  topicPages,
  langs: LANGS.map((l) => ({ lang: l })),
};

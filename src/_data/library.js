// Brings the content file into the templates, and works out for each resource
// which "way of learning" (second blank of the home-page sentence) it belongs to.
import { resources as raw, searchNow, generated } from "../../content/resources.js";

const has = (r, ...f) => r.formats.some((x) => f.includes(x));

// A resource can fit several ways; the first one is where it is listed under "browse everything".
function waysOf(r) {
  const w = [];
  if (r.cat === "children") w.push("kids");
  if (r.cat === "literacy") w.push("read");
  if (r.cat === "speaking") w.push("people");
  if (["courses", "exam"].includes(r.cat) || (r.cat !== "speaking" && has(r, "class", "online"))) w.push("course");
  if (["start", "exam", "work"].includes(r.cat) && has(r, "app", "website", "video")) w.push("phone");
  return w.length ? w : ["phone"];
}

// Higher = shown first among matches: free first, then trusted public providers.
const trustRank = { official: 3, library: 3, ngo: 2, university: 2, quality: 1, community: 1, app: 1 };
const rank = (r) => (r.cost === "free" ? 10 : 0) + (trustRank[r.trust] || 0);

const resources = raw.map((r) => ({ ...r, ways: waysOf(r), rank: rank(r) }));

// Shown before anything is chosen.
const quickNames = ["Oefenen.nl", "Het Begint met Taal", "Bibliotheek: Taalhuis en taalcafé"];

// Resources per way of learning, for "browse everything" (each listed once, under its first way).
const groups = Object.fromEntries(
  ["phone", "people", "course", "read", "kids"].map((w) => [w, resources.filter((r) => r.ways[0] === w)])
);

export default {
  resources,
  groups,
  // "Search now" buttons, shown with the matching way of learning.
  searchNow: searchNow.map((s) => ({ ...s, way: { speaking: "people" }[s.cat] || "course" })),
  generated,
  quick: quickNames.map((n) => resources.find((r) => r.name === n)).filter(Boolean),
  pages: [
    { lang: "nl", home: "/", alt: "/en/", about: "/over/" },
    { lang: "en", home: "/en/", alt: "/", about: "/en/about/" },
  ],
};

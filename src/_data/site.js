// The `site` data for templates: name, links, languages, labels and interface texts.
// The texts themselves are in src/_lib/site-texts.js.
// Keep this file to a single default export: Eleventy turns a data file with extra
// named exports into an object of all its exports, and every site.* text goes blank.
import { siteWithFallback } from "../_lib/site-texts.js";

export default siteWithFallback();

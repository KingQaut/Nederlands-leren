import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (cfg) {
  cfg.addPlugin(HtmlBasePlugin);
  cfg.addPassthroughCopy({ "src/assets": "assets" });
  cfg.addWatchTarget("./content/");

  cfg.addFilter("host", (u) => {
    try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; }
  });
  cfg.addFilter("json", (v) => JSON.stringify(v));
  // Text used by the search box: name + summary + labels, lower case, no accents.
  cfg.addFilter("searchText", (parts) =>
    parts.filter(Boolean).join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, "")
  );

  return {
    dir: { input: "src", output: "_site" },
    // On GitHub Pages without a domain the site lives at /nederlands-leren/;
    // the publish workflow sets PATH_PREFIX for that.
    pathPrefix: process.env.PATH_PREFIX || "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}

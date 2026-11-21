// Brings the content file into the templates.
import { resources, searchNow, generated } from "../../content/resources.js";

// Shown in the "start today" box on the home page.
const quickNames = ["Oefenen.nl", "Het Begint met Taal", "Bibliotheek: Taalhuis en taalcafé"];

export default {
  resources,
  searchNow,
  generated,
  quick: quickNames.map((n) => resources.find((r) => r.name === n)).filter(Boolean),
  pages: [
    { lang: "nl", home: "/", alt: "/en/", about: "/over/" },
    { lang: "en", home: "/en/", alt: "/", about: "/en/about/" },
  ],
};

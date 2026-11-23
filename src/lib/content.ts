// All portfolio text lives in /content/site.json. It's imported at build
// time, so edits go live after the GitHub Pages workflow rebuilds the site.
import raw from "../../content/site.json";

export type Link = { label: string; url: string };

export type Project = {
  title: string;
  description?: string;
  url?: string;
  repo?: string;
  tags?: string[];
};

export type SiteContent = {
  name: string;
  headline?: string;
  bio?: string;
  email?: string;
  links?: Link[];
  projects?: Project[];
};

export const site = raw as SiteContent;

// Content lives in /content/site.json and is edited through Pages CMS
// (schema in /.pages.yml). It's imported at build time, so edits go live
// after the GitHub Pages workflow rebuilds the site.
import raw from "../../content/site.json";

export type Link = { label: string; url: string };

export type Project = {
  title: string;
  description?: string;
  image?: string | null;
  url?: string | null;
  repo?: string | null;
  tags?: string[] | null;
};

export type SiteContent = {
  name: string;
  headline?: string | null;
  bio?: string | null;
  avatar?: string | null;
  email?: string | null;
  links?: Link[] | null;
  projects?: Project[] | null;
};

export const site = raw as SiteContent;

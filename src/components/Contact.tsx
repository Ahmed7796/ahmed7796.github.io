import { site } from "@/lib/content";

export default function Contact() {
  const links = site.links ?? [];

  return (
    <footer id="contact" className="flex flex-col gap-6 border-t border-neutral-800 pt-8">
      <h2 className="text-sm tracking-widest text-neutral-500 uppercase">Contact</h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {site.email && (
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        )}
        {links.map((l) => (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

import { site } from "@/lib/content";

export default function Contact() {
  const links = site.links ?? [];

  return (
    <footer id="contact">
      <h2>Contact</h2>
      <ul>
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

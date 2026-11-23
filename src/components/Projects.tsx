import { site } from "@/lib/content";

export default function Projects() {
  const projects = site.projects ?? [];
  if (projects.length === 0) return null;

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.title}>
            <article>
              <h3>{p.title}</h3>
              {p.description && <p>{p.description}</p>}
              {p.tags && p.tags.length > 0 && (
                <ul>
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              {p.url && <a href={p.url}>Live</a>}
              {p.repo && <a href={p.repo}>Code</a>}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

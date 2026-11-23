import { site } from "@/lib/content";

export default function Projects() {
  const projects = site.projects ?? [];
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="text-sm tracking-widest text-neutral-500 uppercase">Projects</h2>
      <ul className="flex flex-col">
        {projects.map((p) => (
          <li key={p.title} className="border-t border-neutral-800 py-6 first:border-t-0 first:pt-0">
            <article className="flex flex-col gap-3">
              <h3 className="font-medium text-neutral-100">{p.title}</h3>
              {p.description && <p className="leading-7 text-neutral-400">{p.description}</p>}
              {p.tags && p.tags.length > 0 && (
                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-neutral-500">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              {(p.url || p.repo) && (
                <div className="flex gap-4 text-sm">
                  {p.url && <a href={p.url}>Live</a>}
                  {p.repo && <a href={p.repo}>Code</a>}
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const links = site.links ?? [];
  const projects = site.projects ?? [];

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100`}
    >
      <Head>
        <title>{site.headline ? `${site.name} — ${site.headline}` : site.name}</title>
        {site.bio && <meta name="description" content={site.bio} />}
      </Head>

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-20 sm:px-10">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {site.avatar && (
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
              <Image src={site.avatar} alt={site.name} fill sizes="96px" className="object-cover" priority />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
            {site.headline && <p className="text-lg text-zinc-600 dark:text-zinc-400">{site.headline}</p>}
          </div>
        </header>

        {site.bio && (
          <section>
            <p className="whitespace-pre-line text-lg leading-8 text-zinc-700 dark:text-zinc-300">{site.bio}</p>
          </section>
        )}

        {projects.length > 0 && (
          <section className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <li
                  key={p.title}
                  className="flex flex-col overflow-hidden rounded-xl border border-black/[.08] bg-white dark:border-white/[.145] dark:bg-zinc-950"
                >
                  {p.image && (
                    <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900">
                      <Image src={p.image} alt={p.title} fill sizes="(min-width: 640px) 384px, 100vw" className="object-cover" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-semibold">{p.title}</h3>
                    {p.description && (
                      <p className="whitespace-pre-line text-sm leading-6 text-zinc-600 dark:text-zinc-400">{p.description}</p>
                    )}
                    {p.tags && p.tags.length > 0 && (
                      <ul className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <li key={t} className="rounded-full bg-black/[.05] px-2.5 py-0.5 font-mono text-xs dark:bg-white/[.08]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                    {(p.url || p.repo) && (
                      <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
                        {p.url && (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                            Live
                          </a>
                        )}
                        {p.repo && (
                          <a href={p.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                            Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {(site.email || links.length > 0) && (
          <footer className="flex flex-col gap-4 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
              {site.email && (
                <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                  {site.email}
                </a>
              )}
              {links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  {l.label}
                </a>
              ))}
            </div>
          </footer>
        )}
      </main>
    </div>
  );
}

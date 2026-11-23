import Head from "next/head";
import { site } from "@/lib/content";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.name}</title>
        {site.bio && <meta name="description" content={site.bio} />}
      </Head>
      <main className="mx-auto flex max-w-3xl flex-col gap-16 px-4 py-16 sm:px-6 sm:py-24">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

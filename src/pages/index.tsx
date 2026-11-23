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
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

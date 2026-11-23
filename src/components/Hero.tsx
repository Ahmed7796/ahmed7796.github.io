import { site } from "@/lib/content";

export default function Hero() {
  return (
    <header>
      <h1>{site.name}</h1>
      {site.headline && <p>{site.headline}</p>}
      {site.bio && <p>{site.bio}</p>}
    </header>
  );
}

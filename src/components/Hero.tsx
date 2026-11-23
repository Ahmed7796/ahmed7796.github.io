import Image from "next/image";
import { site } from "@/lib/content";

// ASCII-art rendering of the site name. Kept as an array of JSON-escaped
// lines so backslashes and backticks in the art survive untouched.
const NAME_ART = [
  "     _    _                        _",
  "    / \\  | |__  _ __ ___   ___  __| |",
  "   / _ \\ | '_ \\| '_ ` _ \\ / _ \\/ _` |",
  "  / ___ \\| | | | | | | | |  __/ (_| |",
  " /_/   \\_\\_| |_|_| |_| |_|\\___|\\__,_|",
  "  _ _   _   _       _     _                 _   _ _",
  " ( | ) | | | | __ _| |__ | |__   __ _ _ __ (_) ( | )",
  "  V V  | |_| |/ _` | '_ \\| '_ \\ / _` | '_ \\| |  V V",
  "       |  _  | (_| | |_) | |_) | (_| | | | | |",
  "       |_| |_|\\__,_|_.__/|_.__/ \\__,_|_| |_|_|",
  "     _    _         _      _                 _ _",
  "    / \\  | |__   __| | ___| | __ _  __ _  __| (_)_ __",
  "   / _ \\ | '_ \\ / _` |/ _ \\ |/ _` |/ _` |/ _` | | '__|",
  "  / ___ \\| |_) | (_| |  __/ | (_| | (_| | (_| | | |",
  " /_/   \\_\\_.__/ \\__,_|\\___|_|\\__, |\\__,_|\\__,_|_|_|",
  "                             |___/",
].join("\n");

export default function Hero() {
  return (
    <header className="flex flex-col gap-6">
      {/* Real heading for screen readers and search engines; the art is decorative. */}
      <h1 className="sr-only">{site.name}</h1>
      {/* Phones: photo above the art. md+: art left, photo right. */}
      <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Font scales with viewport width so the 54-column art fits on phones;
            overflow-x-auto is a fallback for very narrow screens. */}
        <pre
          aria-hidden="true"
          className="min-w-0 overflow-x-auto text-[length:min(0.875rem,2.8vw)] leading-tight text-neutral-200"
        >
          {NAME_ART}
        </pre>
        {/* 4:5 portrait oval; border-radius 50% on a non-square box gives an ellipse. */}
        <Image
          src="/images/headshot.png"
          alt={site.name}
          width={629}
          height={518}
          loading="eager"
          className="h-35 w-28 shrink-0 rounded-[50%] object-cover ring-1 ring-neutral-700 md:h-45 md:w-36"
        />
      </div>
      {site.headline && <p className="text-lg text-neutral-200">{site.headline}</p>}
      {site.bio && <p className="leading-7 text-neutral-400">{site.bio}</p>}
    </header>
  );
}

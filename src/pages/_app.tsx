import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare global {
  interface Window {
    goatcounter?: { count: (vars?: { path?: string }) => void };
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // count.js only records the initial page load; client-side navigations
  // (next/link) don't reload the page, so report them explicitly.
  useEffect(() => {
    const onRouteChange = (url: string) => window.goatcounter?.count({ path: url });
    router.events.on("routeChangeComplete", onRouteChange);
    return () => router.events.off("routeChangeComplete", onRouteChange);
  }, [router.events]);

  return (
    <>
      {/* GoatCounter analytics — dashboard: https://ahmed7796.goatcounter.com */}
      <Script
        src="https://gc.zgo.at/count.js"
        data-goatcounter="https://ahmed7796.goatcounter.com/count"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

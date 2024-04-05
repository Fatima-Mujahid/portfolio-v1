import React, { useEffect } from "react";
import { Alexandria } from "next/font/google";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import ReactGA from "react-ga4";
import AnimatedCursor from "react-animated-cursor";
import { usePathname } from "next/navigation";

const alexandria = Alexandria({ subsets: ["latin"] });

ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);

export default function App({ Component, pageProps }) {
  const pathname = usePathname();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [pathname]);

  return (
    <main className={alexandria.className}>
      <Layout>
        <AnimatedCursor
          color="33, 33, 33"
          innerSize={14}
          outerSize={16}
          innerScale={1}
          outerScale={1}
        />
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

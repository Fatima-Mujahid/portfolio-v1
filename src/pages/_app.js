import { Alexandria } from "next/font/google";
import Layout from "../components/layout";
import "@/styles/globals.css";
import AnimatedCursor from "react-animated-cursor";

const alexandria = Alexandria({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
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

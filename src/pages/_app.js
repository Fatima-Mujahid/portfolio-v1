import { Alexandria } from "next/font/google";
import Layout from "../components/layout";
import "@/styles/globals.css";

const alexandria = Alexandria({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={alexandria.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

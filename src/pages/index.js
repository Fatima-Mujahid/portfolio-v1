import Head from "next/head";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Fatima's Portfolio</title>
        <meta
          name="description"
          content="Turning ideas into powerful software that drive results."
          key="desc"
        />
      </Head>
      <Header />
      <Projects />
      <Testimonials />
      {/* <Blogs /> */}
    </section>
  );
}

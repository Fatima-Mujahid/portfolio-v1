import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section>
      <Header />
      <Projects />
      <Blogs />
      <Testimonials />
    </section>
  );
}

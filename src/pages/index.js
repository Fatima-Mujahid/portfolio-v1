import { Alexandria } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const alexandria = Alexandria({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={alexandria.className}>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}

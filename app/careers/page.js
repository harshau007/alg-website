import Navbar from "../Navbar";
import Footer from "../Footer";
import Career from "./Career";

export const metadata = {
  title: "ALG - Careers",
  description: "ALG",
};

export default function Donate() {
  return (
    <section className="relative">
      <Navbar />
      <Career />
      <Footer />
    </section>
  );
}

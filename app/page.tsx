
import { Characteristics } from "@/components/Characteristics";
import { Header } from "@/components/Header";
import { Landing } from "@/components/Landing";
import { Plans } from "@/components/Plans";
import { Contact } from "@/components/Contact";
import { KnowUs } from "@/components/KnowUs";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/bg-dotsLight.png')] bg-cover bg-center min-h-screen">
        <Header />
        <Landing />
      </div>
      <Characteristics />
      <KnowUs />
      <Plans />
      <Contact />
      <FAQs />
      <Footer />
      <BackToTop />
    </>
  );
}

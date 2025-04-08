
import { Caracteristics } from "@/components/Caracteristics";
import { Header } from "@/components/Header";
import { Landing } from "@/components/Landing";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/bg-dotsLight.png')] bg-cover bg-center min-h-screen">
        <Header />
        <Landing />
      </div>
      <Caracteristics />
      <Plans />
    </>
  );
}

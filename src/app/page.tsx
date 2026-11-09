import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden">
      <Header />
      
      <div className="flex w-full">
        <SideBar />

        <main className="flex-1 min-w-0 lg:ml-56 pt-24 min-h-screen relative">
          <Hero />
          <AboutMe />
          <Skills />
        </main>
      </div>
    </div>
  );
}
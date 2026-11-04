import { caveat, jetbrainsMono } from "@/app/fonts";
import GridSection from "../ui/GridSection";
import HeroPortrait from "../ui/HeroPortrait";
import Typewrite from "../ui/Typewriter";

export default function Hero() {
    return (
        <section id="home" className={`relative px-5 pt-4 pb-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-23 xl:px-15 ` + jetbrainsMono.className}>
            <GridSection />

            <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
                <div className="flex flex-col font-mono">
                    <p className="text-[#8B8AFF]">&gt; <span className="text-[#9AA0B2]">whoami</span></p>

                    <p className="mt-4 text-2xl text-[#C9CDD8] md:text-3xl">Salut, je suis</p>

                    <div className="relative mt-3 w-fit xl:w-auto">
                        <h1 className="text-6xl font-bold leading-none text-[#E6E8EF] md:text-8xl lg:text-7xl xl:text-8xl">
                            Wassim
                            <br />
                            Rifi
                        </h1>

                        <span
                            aria-hidden="true"
                            className="absolute bottom-[7%] right-0 hidden h-2.5 w-12 bg-[#8B8AFF] shadow-[0_0_12px_#8B8AFF,0_0_30px_#8B8AFF80] md:block"
                        />
                    </div>

                    <Typewrite />

                    <p className="mt-6 max-w-xl text-base leading-loose text-[#9AA0B2] md:text-lg">
                        Je construis des API REST avec Laravel et Spring Boot, et des interfaces
                        web avec React.js et Angular — avec du code propre et un vrai objectif.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
                        <a
                            href="#projects"
                            className="border border-[#8B8AFF] bg-[#10112A] px-7 py-4 text-center text-sm font-semibold text-[#E6E8EF] cursor-pointer"
                        >
                            Voir mes projets →
                        </a>

                        <a
                            href="/cv/CV - Wassim Rifi.pdf"
                            download
                            className="border border-[#2A2F40] px-7 py-4 text-center text-sm text-[#C9CDD8] cursor-pointer"
                        >
                            Télécharger CV ↓
                        </a>
                    </div>
                </div>

                <HeroPortrait>
                    <p
                        className={`absolute bottom-8 right-6 -rotate-6 text-right text-3xl leading-tight text-[#C9CDD8]/90 ${caveat.className}`}
                    >
                        Better code,
                        <br />
                        bigger dreams.
                    </p>
                </HeroPortrait>
                </div>
        </section>
    );
}
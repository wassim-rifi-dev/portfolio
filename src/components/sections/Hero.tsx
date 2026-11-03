import { jetbrainsMono } from "@/app/layout";
import Typewrite from "../ui/Typewriter";

export default function Hero() {
    return (
        <section id="home" className={`relative px-15 pt-8 pb-23 ` + jetbrainsMono.className}>
            <div
                className="absolute inset-0
                bg-[linear-gradient(to_right,#ffffff1f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1f_1px,transparent_1px)]
                bg-size-[50px_50px]"
            />

            <div className="flex flex-col font-mono">
                <p className="text-[#8B8AFF]">&gt; <span className="text-[#9AA0B2]">whoami</span></p>

                <p className="mt-4 text-2xl text-[#C9CDD8] md:text-3xl">Salut, je suis</p>

                <h1 className="mt-3 text-6xl font-bold leading-none text-]#E6E8EF md:text-8xl">
                    Wassim
                    <br />
                    Rifi
                </h1>

                <Typewrite />

                <p className="mt-6 max-w-xl text-base leading-loose text-[#9AA0B2] md:text-lg">
                    Je construis des API REST avec Laravel et Spring Boot, et des interfaces
                    web avec React.js et Angular — avec du code propre et un vrai objectif.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="border border-[#8B8AFF] bg-[#10112A] px-7 py-4 text-sm font-semibold text-[#E6E8EF] cursor-pointer"
                    >
                        Voir mes projets →
                    </a>

                    <a
                        href="/cv/CV - Wassim Rifi.pdf"
                        download
                        className="border border-[#2A2F40] px-7 py-4 text-sm text-[#C9CDD8] cursor-pointer"
                    >
                        Télécharger CV ↓
                    </a>
                </div>
            </div>

            <div></div>
        </section>
    );
}
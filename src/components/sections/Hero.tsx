import { caveat, jetbrainsMono } from "@/app/layout";
import GridSection from "../ui/GridSection";
import Typewrite from "../ui/Typewriter";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className={`relative px-15 pt-8 pb-23 ` + jetbrainsMono.className}>
            <GridSection />

            <div className="relative grid items-center gap-16 md:grid-cols-2">
                <div className="flex flex-col font-mono">
                    <p className="text-[#8B8AFF]">&gt; <span className="text-[#9AA0B2]">whoami</span></p>

                    <p className="mt-4 text-2xl text-[#C9CDD8] md:text-3xl">Salut, je suis</p>

                    <div className="relative mt-3">
                        <h1 className="text-6xl font-bold leading-none text-[#E6E8EF] md:text-8xl">
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

                <div className="group relative aspect-3/4 w-full max-w-md justify-self-end overflow-hidden border border-[#2A2F40] bg-[#0A0A10]">
                    <Image
                        src="/images/me_white_black.webp"
                        alt="Wassim Rifi"
                        fill
                        priority
                        sizes="(min-width: 768px) 450px, 100vw"
                        className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />

                    <p
                        className={`absolute bottom-8 right-6 -rotate-6 text-right text-3xl leading-tight text-[#C9CDD8]/90 ${caveat.className}`}
                    >
                        Better code,
                        <br />
                        bigger dreams.
                    </p>
                </div>
                </div>
        </section>
    );
}
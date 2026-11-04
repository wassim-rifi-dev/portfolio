import { jetbrainsMono } from "@/app/fonts";
import { Code, MapPin } from "lucide-react";

export default function AboutMe() {
    return (
        <section className={`relative px-5 pt-4 pb-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-23 xl:px-15 ` + jetbrainsMono.className}>
            <p className="text-[#8B8AFF]">01  ABOUT ME</p>

            <div className="mt-5">
                <div className="max-w-xl font-mono">
                    <h2 className="text-5xl md:text-6xl font-medium leading-tight text-zinc-100">
                        Plus que du code<span className="text-indigo-400">.</span>
                    </h2>

                    <p className="mt-8 text-base leading-8 text-zinc-400">
                        Étudiant en développement Web Full-Stack à YouCode Nador — UM6P. J'aime transformer des idées en produits concrets, apprendre de nouvelles technologies et résoudre de vrais problèmes. Je recherche ma première opportunité professionnelle pour continuer à progresser.
                    </p>

                    <div className="mt-6 flex items-center gap-4 text-zinc-400">
                        <MapPin size={18} />
                        <span>Maroc</span>
                    </div>

                    <div className="mt-6 flex items-center gap-4 text-zinc-400">
                        <Code size={18} />
                        <span>Toujours en apprentissage…</span>
                    </div>
                </div>

                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
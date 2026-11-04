import { jetbrainsMono } from "@/app/fonts";
import { Code, MapPin, Sun, Timer, Users } from "lucide-react";

export default function AboutMe() {
    return (
        <section className={`relative px-5 pt-4 pb-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-23 xl:px-15 mt-10 ` + jetbrainsMono.className}>
            <p className="text-sm tracking-widest text-[#8B8AFF]">01&nbsp;&nbsp;ABOUT ME</p>

            <div className="mt-5 flex flex-col gap-10 sm:gap-14 xl:flex-row xl:items-start xl:gap-10 2xl:gap-16">
                <div className="xl:w-[36%] xl:shrink-0">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-[#E6E8EF]">
                        Plus que du code<span className="text-[#8B8AFF]">.</span>
                    </h2>

                    <p className="mt-6 sm:mt-8 max-w-2xl xl:max-w-none text-sm sm:text-base leading-7 sm:leading-8 text-[#9AA0B2]">
                        Étudiant en développement Web Full-Stack à YouCode Nador — UM6P. J&apos;aime transformer des idées en produits concrets, apprendre de nouvelles technologies et résoudre de vrais problèmes. Je recherche ma première opportunité professionnelle pour continuer à progresser.
                    </p>

                    <div className="mt-6 flex items-center gap-4 text-[#9AA0B2]">
                        <MapPin size={18} className="shrink-0" />
                        <span>Maroc</span>
                    </div>

                    <div className="mt-6 flex items-center gap-4 text-[#9AA0B2]">
                        <Code size={18} className="shrink-0" />
                        <span>Toujours en apprentissage…</span>
                    </div>
                </div>

                <div className="min-w-0 flex-1 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
                        <div className="p-6 sm:p-8 xl:p-5 2xl:p-8">
                            <Sun size={24} className="text-[#8B8AFF]" />
                            <h3 className="mt-6 text-lg text-[#E6E8EF]">Autonomie</h3>
                            <p className="mt-4 text-base leading-7 text-[#9AA0B2]">
                                Je décompose un problème et avance seul quand il le faut.
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 xl:p-5 2xl:p-8">
                            <Users size={24} className="text-[#8B8AFF]" />
                            <h3 className="mt-6 text-lg text-[#E6E8EF]">Travail en équipe</h3>
                            <p className="mt-4 text-base leading-7 text-[#9AA0B2]">
                                Collaboration et communication claire avec l&apos;équipe.
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 xl:p-5 2xl:p-8">
                            <Timer size={24} className="text-[#8B8AFF]" />
                            <h3 className="mt-6 text-lg text-[#E6E8EF]">Gestion du temps</h3>
                            <p className="mt-4 text-base leading-7 text-[#9AA0B2]">
                                Organisé, je respecte les délais et les priorités.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 xl:p-5 2xl:p-8">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-[#9AA0B2]">
                                Dernière expérience
                            </p>
                            <h3 className="mt-2 text-lg sm:text-xl text-[#E6E8EF]">
                                Stage Full-Stack · Detroit Computer, Tanger
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-[#9AA0B2]">
                                App web & mobile de gestion des employés — React, React Native, Spring Boot
                            </p>
                        </div>

                        <span className="shrink-0 text-sm text-[#8B8AFF]">
                            Mai — Juin 2026
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
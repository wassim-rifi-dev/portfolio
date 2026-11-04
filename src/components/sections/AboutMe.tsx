import { jetbrainsMono } from "@/app/fonts";
import { Code, MapPin, Sun, Timer, Users } from "lucide-react";

export default function AboutMe() {
    return (
        <section className={`relative px-5 pt-4 pb-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-23 xl:px-15 ` + jetbrainsMono.className}>
            <p className="text-[#8B8AFF]">01  ABOUT ME</p>

            <div className="mt-5 flex">
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

                <div className="font-mono space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
                        <div className="p-8">
                            <Sun size={24} className="text-indigo-400" />
                            <h3 className="mt-6 text-lg text-zinc-100">Autonomie</h3>
                            <p className="mt-4 text-base leading-7 text-zinc-400">
                                Je décompose un problème et avance seul quand il le faut.
                            </p>
                        </div>

                        <div className="p-8">
                            <Users size={24} className="text-indigo-400" />
                            <h3 className="mt-6 text-lg text-zinc-100">Travail en équipe</h3>
                            <p className="mt-4 text-base leading-7 text-zinc-400">
                                Collaboration et communication claire avec l'équipe.
                            </p>
                        </div>

                        <div className="p-8">
                            <Timer size={24} className="text-indigo-400" />
                            <h3 className="mt-6 text-lg text-zinc-100">Gestion du temps</h3>
                            <p className="mt-4 text-base leading-7 text-zinc-400">
                                Organisé, je respecte les délais et les priorités.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-zinc-800 bg-zinc-900/40 p-8">
                        <div>
                            <p className="text-sm uppercase tracking-wider text-zinc-500">
                                Dernière expérience
                            </p>
                            <h3 className="mt-2 text-xl text-zinc-100">
                                Stage Full-Stack · Detroit Computer, Tanger
                            </h3>
                            <p className="mt-2 text-base text-zinc-400">
                                App web & mobile de gestion des employés — React, React Native, Spring Boot
                            </p>
                        </div>

                        <span className="shrink-0 text-sm text-indigo-400">
                            Mai — Juin 2026
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
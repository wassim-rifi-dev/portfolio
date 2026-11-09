import { jetbrainsMono } from "@/app/fonts";
import { Circle, GitBranch } from "lucide-react";
import IdeSkills from "../ui/IdeSkills";
import SkillsMarquee from "../ui/SkillsMarquee";

export default function Skills() {
    return (
        <section id="skills" className={`relative scroll-mt-20 px-5 py-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-23 xl:px-15 mt-10 ` + jetbrainsMono.className}>
            <div className="flex flex-col gap-5">
                <p className="text-sm tracking-widest text-[#8B8AFF]">02&nbsp;&nbsp;SKILLS</p>

                <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-[#E6E8EF]">
                    Plus que du code<span className="text-[#8B8AFF]">.</span>
                </h2>

                <div className="text-[#9AA0B2] flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                    <p className="text-base sm:text-lg">
                        Les outils et technologies avec lesquels je travaille.
                    </p>
                    <p className="text-sm sm:text-base shrink-0">
                        Ouvre un fichier pour explorer <span className="text-[#8B8AFF]">↓</span>
                    </p>
                </div>
            </div>

            <div className="mt-10 sm:mt-15 bg-[#0E1020]">
                <div className="flex justify-between items-center gap-3 px-3 sm:px-4 py-3 border border-[#1A1D28] bg-[#0A0C14]">
                    <div className="flex shrink-0 items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2F40]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2F40]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2F40]" />
                    </div>

                    <p className="min-w-0 truncate text-[#9AA0B2] text-xs sm:text-sm font-mono">
                        <span className="hidden sm:inline">wassim-rifi — </span>skills/frontend.ts
                    </p>

                    <div className="flex shrink-0 gap-1.5 items-center text-[#8B8AFF]">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B8AFF] opacity-75" />
                            <Circle
                                className="relative z-10 h-2 w-2 fill-[#8B8AFF] text-[#8B8AFF] border-none"
                            />
                        </span>

                        <p className="text-xs">live</p>
                    </div>
                </div>

                <IdeSkills />

                <div></div>
            </div>

            <div className="flex w-full items-center gap-4 sm:gap-6 bg-[#8B8AFF] px-3 sm:px-4 py-1 text-xs text-[#06070B]">
                <span className="flex items-center gap-1.5">
                    <GitBranch className="h-3.5 w-3.5" />
                    main
                </span>
                <span>TypeScript</span>
                <span>UTF-8</span>
            </div>

            <div className="mt-10 sm:mt-15">
                <SkillsMarquee />
            </div>
        </section>
    )
}
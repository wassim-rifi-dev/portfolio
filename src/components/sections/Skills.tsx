import { jetbrainsMono } from "@/app/fonts";
import { Circle } from "lucide-react";
import IdeSkills from "../ui/IdeSkills";

export default function Skills() {
    return (
        <section id="skills" className={`relative scroll-mt-20 px-5 py-16 sm:px-8 lg:px-10 lg:pt-8 lg:pb-23 xl:px-15 mt-10 ` + jetbrainsMono.className}>
            <div className="flex flex-col gap-5">
                <p className="text-sm tracking-widest text-[#8B8AFF]">02&nbsp;&nbsp;SKILLS</p>

                <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-[#E6E8EF]">
                    Plus que du code<span className="text-[#8B8AFF]">.</span>
                </h2>

                <div className="text-[#9AA0B2] flex justify-between">
                    <p className="text-lg">
                        Les outils et technologies avec lesquels je travaille.
                    </p>
                    <p>
                        Ouvre un fichier pour explorer <span className="text-[#8B8AFF]">↓</span>
                    </p>
                </div>
            </div>

            <div className="mt-15 bg-[#0E1020]">
                <div className="flex justify-between items-center px-4 py-3 border border-[#1A1D28] bg-[#0A0C14]">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2F40]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2F40]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2F40]" />
                    </div>

                    <p className="text-[#9AA0B2] text-sm font-mono">
                        wassim-rifi — skills/frontend.ts
                    </p>

                    <div className="flex gap-1.5 items-center text-[#8B8AFF]">
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

            <div></div>
        </section>
    )
}
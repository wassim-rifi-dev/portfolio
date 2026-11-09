import { jetbrainsMono } from "@/app/fonts";
import { Circle } from "lucide-react";

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

                <div className="flex">
                    <div className="py-5 border border-[#1A1D28] bg-[#0A0B11]">
                        <div className="border-b border border-[#1A1D28] border-t-0 px-5 flex flex-col gap-3 pb-5">
                            <p className="text-[#6E7489]">EXPLORER</p>

                            <div>
                                <div className="flex items-center gap-2 py-5">
                                    <span className="text-xs text-[#6E7489]">▾</span>
                                    <span className="text-[#C9CDD8] text-lg">skills</span>
                                </div>

                                <div className="-mx-5">
                                    <div className="bg-[#0E1020] border-l-2 border-[#8B8AFF] flex gap-2.5 items-center pl-15 pr-7 py-3 cursor-pointer">
                                        <p className="text-[#8B8AFF]">TS</p>

                                        <p className="w-40 text-[#E6E8EF]">frontend.ts</p>

                                        <p className="text-[#8B8AFF]">8</p>
                                    </div>

                                    <div className="group border-l-2 border-transparent flex gap-2.5 items-center pl-15 pr-7 py-3 cursor-pointer transition-colors hover:bg-[#0E1020]/60 hover:border-[#2A2F40]">
                                        <p className="text-[#4A5068] transition-colors group-hover:text-[#8B8AFF]/70">TS</p>

                                        <p className="w-40 text-[#9AA0B2] transition-colors group-hover:text-[#C9CDD8]">backend.ts</p>

                                        <p className="text-[#6E7489]">6</p>
                                    </div>

                                    <div className="group border-l-2 border-transparent flex gap-2.5 items-center pl-15 pr-7 py-3 cursor-pointer transition-colors hover:bg-[#0E1020]/60 hover:border-[#2A2F40]">
                                        <p className="text-[#4A5068] transition-colors group-hover:text-[#8B8AFF]/70">TS</p>

                                        <p className="w-40 text-[#9AA0B2] transition-colors group-hover:text-[#C9CDD8]">database.ts</p>

                                        <p className="text-[#6E7489]">2</p>
                                    </div>

                                    <div className="group border-l-2 border-transparent flex gap-2.5 items-center pl-15 pr-7 py-3 cursor-pointer transition-colors hover:bg-[#0E1020]/60 hover:border-[#2A2F40]">
                                        <p className="text-[#4A5068] transition-colors group-hover:text-[#8B8AFF]/70">TS</p>

                                        <p className="w-40 text-[#9AA0B2] transition-colors group-hover:text-[#C9CDD8]">tools.ts</p>

                                        <p className="text-[#6E7489]">12</p>
                                    </div>
                                </div>

                                <div className="border-t border-[#1C1F2E] mt-5 pt-8">
                                    <p className="text-xs tracking-[0.2em] text-[#6E7489] mb-3">TOTAL</p>

                                    <p className="text-5xl">
                                        <span className="text-[#E6E8EF]">28</span>{" "}
                                        <span className="text-[#9AA0B2]">techs</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="flex bg-[#0E1020] border-b border-[#1C1F2E]">
                            <div className="bg-[#0E1020] border-t-2 border-t-[#8B8AFF] border-r border-r-[#8B8AFF] px-8 py-4">
                                <p className="text-[#E6E8EF]">frontend.ts</p>
                            </div>

                            <div className="group border-t-2 border-transparent border-r border-r-[#1C1F2E] px-8 py-4 cursor-pointer transition-colors hover:bg-[#141729] hover:border-t-[#2A2F40]">
                                <p className="text-[#6E7489] transition-colors group-hover:text-[#C9CDD8]">backend.ts</p>
                            </div>

                            <div className="group border-t-2 border-transparent border-r border-r-[#1C1F2E] px-8 py-4 cursor-pointer transition-colors hover:bg-[#141729] hover:border-t-[#2A2F40]">
                                <p className="text-[#6E7489] transition-colors group-hover:text-[#C9CDD8]">database.ts</p>
                            </div>

                            <div className="group border-t-2 border-transparent border-r border-r-[#1C1F2E] px-8 py-4 cursor-pointer transition-colors hover:bg-[#141729] hover:border-t-[#2A2F40]">
                                <p className="text-[#6E7489] transition-colors group-hover:text-[#C9CDD8]">tools.ts</p>
                            </div>
                        </div>

                        <div className="bg-[#0A0B11]">
                            test
                        </div>
                    </div>
                </div>

                <div></div>
            </div>

            <div></div>
        </section>
    )
}
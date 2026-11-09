'use client';

import { skills } from "@/app/data/skills";
import type React from "react";
import { useState } from "react";

const fileNames: Record<string, string> = {
    "Frontend": "frontend",
    "Backend": "backend",
    "Base de données": "database",
    "Tools & Environment": "tools",
};

export default function IdeSkills() {
    const [tap , setTap] = useState("Frontend");

    return (
        <div className="flex">
            <div className="hidden lg:flex pt-5 border border-[#1A1D28] bg-[#0A0B11] flex-col">
                <div className="flex-1 border-b border border-[#1A1D28] border-t-0 px-5 flex flex-col gap-3 pb-5">
                    <p className="text-[#6E7489]">EXPLORER</p>

                    <div>
                        <div className="flex items-center gap-2 py-5">
                            <span className="text-xs text-[#6E7489]">▾</span>
                            <span className="text-[#C9CDD8] text-lg">skills</span>
                        </div>

                        <div className="-mx-5">
                            {skills.map((skill) => (
                                skill.category === tap ? (
                                    <div key={skill.category} className="bg-[#0E1020] border-l-2 border-[#8B8AFF] flex gap-2.5 items-center pl-15 pr-7 py-3 cursor-pointer">
                                        <p className="text-[#8B8AFF]">TS</p>

                                        <p className="w-40 text-[#E6E8EF]">{fileNames[skill.category]}.ts</p>

                                        <p className="text-[#8B8AFF]">{skill.stack.length}</p>
                                    </div>
                                ) : (
                                    <div
                                        key={skill.category}
                                        onClick={() => setTap(skill.category)}
                                        className="group border-l-2 border-transparent flex gap-2.5 items-center pl-15 pr-7 py-3 cursor-pointer transition-colors hover:bg-[#0E1020]/60 hover:border-[#2A2F40]"
                                    >
                                        <p className="text-[#4A5068] transition-colors group-hover:text-[#8B8AFF]/70">TS</p>

                                        <p className="w-40 text-[#9AA0B2] transition-colors group-hover:text-[#C9CDD8]">{fileNames[skill.category]}.ts</p>

                                        <p className="text-[#6E7489]">{skill.stack.length}</p>
                                    </div>
                                )
                            ))}
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

            <div className="w-full min-w-0">
                <div className="flex overflow-x-auto bg-[#0E1020] border-b border-[#1C1F2E] scrollbar-none [&::-webkit-scrollbar]:hidden">
                    {skills.map((skill) => (
                        skill.category === tap ? (
                            <div key={skill.category} className="shrink-0 bg-[#0E1020] border-t-2 border-t-[#8B8AFF] border-r border-r-[#8B8AFF] px-4 py-3 text-sm sm:px-8 sm:py-4 sm:text-base">
                                <p className="text-[#E6E8EF]">{fileNames[skill.category]}.ts</p>
                            </div>
                        ) : (
                            <div
                                key={skill.category}
                                onClick={() => setTap(skill.category)}
                                className="group shrink-0 border-t-2 border-transparent border-r border-r-[#1C1F2E] px-4 py-3 text-sm sm:px-8 sm:py-4 sm:text-base cursor-pointer transition-colors hover:bg-[#141729] hover:border-t-[#2A2F40]"
                            >
                                <p className="text-[#6E7489] transition-colors group-hover:text-[#C9CDD8]">{fileNames[skill.category]}.ts</p>
                            </div>
                        )
                    ))}
                </div>

                <div
                    className="bg-[#0A0B11] py-6 font-mono text-[13px] leading-7 sm:text-[15px] sm:leading-8 overflow-x-auto h-[calc(var(--lines)*28px+48px)] sm:h-[calc(var(--lines)*32px+48px)]"
                    style={{ "--lines": Math.max(...skills.map(s => s.stack.length)) + 10 } as React.CSSProperties}
                >
                    {skills.filter(s => s.category === tap).map((skill) => (
                        <div key={skill.category}>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">1</span>
                                <code className="whitespace-pre text-[#6E7489] italic">{"// skills/" + fileNames[skill.category] + ".ts — " + skill.stack.length + " technologies"}</code>
                            </div>
                            <div className="flex bg-[#12142A]">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#8B8AFF]">2</span>
                                <code className="whitespace-pre text-[#E6E8EF]"><span className="text-[#8B8AFF]">export const </span><span className="text-[#7DD3FC]">{fileNames[skill.category]}</span> = {"{"}</code>
                            </div>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">3</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">role</span>: <span className="text-[#A6E3A1]">&quot;{skill.role}&quot;</span>,</code>
                            </div>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">4</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">stack</span>: [</code>
                            </div>

                            {skill.stack.map((tech, index) => (
                                <div key={tech} className="flex">
                                    <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">{index + 5}</span>
                                    <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">&quot;{tech}&quot;</span>,</code>
                                </div>
                            ))}

                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 5}</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  ],</code>
                            </div>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 6}</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">usedIn</span>: [{skill.usedIn.map((project, i) => (
                                    <span key={project}><span className="text-[#A6E3A1]">&quot;{project}&quot;</span>{i < skill.usedIn.length - 1 ? ", " : ""}</span>
                                ))}],</code>
                            </div>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 7}</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">learning</span>: <span className="text-[#8B8AFF]">true</span>,</code>
                            </div>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 8}</span>
                                <code className="whitespace-pre text-[#E6E8EF]">{"};"}</code>
                            </div>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 9}</span>
                                <code className="whitespace-pre"> </code>
                            </div>
                            <div className="flex">
                                <span className="w-10 sm:w-16 shrink-0 pr-3 sm:pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 10}</span>
                                <code className="whitespace-pre text-[#E6E8EF]"><span className="text-[#8B8AFF]">export default </span><span className="text-[#7DD3FC]">{fileNames[skill.category]}</span>;</code>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#0A0B11] border-t border-[#1C1F2E] px-4 sm:px-6 py-4 font-mono text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
                    <p className="text-[11px] tracking-[0.2em] text-[#6E7489] mb-2">TERMINAL</p>

                    {skills.filter(s => s.category === tap).map((skill) => (
                        <div key={skill.category}>
                            <p className="whitespace-pre">
                                <span className="text-[#8B8AFF]">wassim@portfolio</span>
                                <span className="text-[#6E7489]">:~$ </span>
                                <span className="text-[#E6E8EF]">npm run skills -- --{fileNames[skill.category]}</span>
                            </p>
                            <p className="whitespace-pre">
                                <span className="text-[#A6E3A1]">✓ </span>
                                <span className="text-[#C9CDD8]">{skill.stack.length} technologies chargées · {skill.usedIn.length} projet{skill.usedIn.length > 1 ? "s" : ""}</span>
                            </p>
                        </div>
                    ))}

                    <p className="whitespace-pre flex items-center">
                        <span className="text-[#8B8AFF]">wassim@portfolio</span>
                        <span className="text-[#6E7489]">:~$ </span>
                        <span className="inline-block w-2 h-4 bg-[#8B8AFF] animate-pulse" />
                    </p>
                </div>
            </div>
        </div>
    )
}
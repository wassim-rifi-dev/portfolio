'use client';

import { skills } from "@/app/data/skills";
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
            <div className="pt-5 border border-[#1A1D28] bg-[#0A0B11] flex flex-col">
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

            <div className="w-full">
                <div className="flex bg-[#0E1020] border-b border-[#1C1F2E]">
                    {skills.map((skill) => (
                        skill.category === tap ? (
                            <div key={skill.category} className="bg-[#0E1020] border-t-2 border-t-[#8B8AFF] border-r border-r-[#8B8AFF] px-8 py-4">
                                <p className="text-[#E6E8EF]">{fileNames[skill.category]}.ts</p>
                            </div>
                        ) : (
                            <div
                                key={skill.category}
                                onClick={() => setTap(skill.category)}
                                className="group border-t-2 border-transparent border-r border-r-[#1C1F2E] px-8 py-4 cursor-pointer transition-colors hover:bg-[#141729] hover:border-t-[#2A2F40]"
                            >
                                <p className="text-[#6E7489] transition-colors group-hover:text-[#C9CDD8]">{fileNames[skill.category]}.ts</p>
                            </div>
                        )
                    ))}
                </div>

                <div
                    className="bg-[#0A0B11] py-6 font-mono text-[15px] leading-8 overflow-x-auto"
                    style={{ height: (Math.max(...skills.map(s => s.stack.length)) + 7) * 32 + 48 }}
                >
                    {skills.filter(s => s.category === tap).map((skill) => (
                        <div key={skill.category}>
                            <div className="flex">
                                <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">1</span>
                                <code className="whitespace-pre text-[#6E7489] italic">{"// skills/" + fileNames[skill.category] + ".ts — " + skill.stack.length + " technologies"}</code>
                            </div>
                            <div className="flex bg-[#12142A]">
                                <span className="w-16 shrink-0 pr-6 text-right select-none text-[#8B8AFF]">2</span>
                                <code className="whitespace-pre text-[#E6E8EF]"><span className="text-[#8B8AFF]">export const </span><span className="text-[#7DD3FC]">{fileNames[skill.category]}</span> = {"{"}</code>
                            </div>
                            <div className="flex">
                                <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">3</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">role</span>: <span className="text-[#A6E3A1]">&quot;{skill.role}&quot;</span>,</code>
                            </div>
                            <div className="flex">
                                <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">4</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">stack</span>: [</code>
                            </div>

                            {skill.stack.map((tech, index) => (
                                <div key={tech} className="flex">
                                    <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">{index + 5}</span>
                                    <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">&quot;{tech}&quot;</span>,</code>
                                </div>
                            ))}

                            <div className="flex">
                                <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 5}</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  ],</code>
                            </div>
                            <div className="flex">
                                <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 6}</span>
                                <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">learning</span>: <span className="text-[#8B8AFF]">true</span>,</code>
                            </div>
                            <div className="flex">
                                <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">{skill.stack.length + 7}</span>
                                <code className="whitespace-pre text-[#E6E8EF]">{"};"}</code>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default function IdeSkills() {
    return (
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

                <div className="bg-[#0A0B11] py-6 font-mono text-[15px] leading-8 overflow-x-auto">
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">1</span>
                        <code className="whitespace-pre text-[#6E7489] italic">{"// skills/frontend.ts — 8 technologies"}</code>
                    </div>
                    <div className="flex bg-[#12142A]">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#8B8AFF]">2</span>
                        <code className="whitespace-pre text-[#E6E8EF]"><span className="text-[#8B8AFF]">export const </span><span className="text-[#7DD3FC]">frontend</span> = {"{"}</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">3</span>
                        <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">role</span>: <span className="text-[#A6E3A1]">{'"Interfaces modernes et responsives"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">4</span>
                        <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">stack</span>: [</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">5</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"React.js"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">6</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"React Native"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">7</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"Angular"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">8</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"TypeScript"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">9</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"JavaScript ES6+"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">10</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"HTML"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">11</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"CSS"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">12</span>
                        <code className="whitespace-pre text-[#E6E8EF]">    <span className="text-[#A6E3A1]">{'"Tailwind CSS"'}</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">13</span>
                        <code className="whitespace-pre text-[#E6E8EF]">  ],</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">15</span>
                        <code className="whitespace-pre text-[#E6E8EF]">  <span className="text-[#7DD3FC]">learning</span>: <span className="text-[#8B8AFF]">true</span>,</code>
                    </div>
                    <div className="flex">
                        <span className="w-16 shrink-0 pr-6 text-right select-none text-[#3A3F55]">16</span>
                        <code className="whitespace-pre text-[#E6E8EF]">{"};"}</code>
                    </div>
                </div>
            </div>
        </div>
    )
}
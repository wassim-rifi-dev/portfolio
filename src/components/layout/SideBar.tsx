'use client';

import { jetbrainsMono } from "@/app/layout";
import { useState } from "react";

const sections = [
    { name: "home", href:"#" },
    { name: "about", href:"#about" },
    { name: "skills", href:"#skills" },
    { name: "projects", href:"#projects" },
    { name: "formation", href:"#formation" },
    { name: "contact", href:"#contact" },
];

export default function SideBar() {
    const [active_section, setSection] = useState("home");

    return (
        <aside className={`fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col justify-between px-8 pb-8 pt-28 lg:flex ${jetbrainsMono.className}`}>
            <nav className="relative border-l border-[#23273A] pl-6">
                <ul className="space-y-5 py-4">
                    {sections.map((section) => {
                        const isActive = active_section === section.name;

                        return (
                            <li key={section.name} className="flex items-center">
                                <span className="relative mr-4 flex h-2 w-2">
                                    { isActive && (
                                        <>
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B8AFF] opacity-75" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B8AFF]" />
                                        </>
                                    )
                                    }
                                </span>

                                <a
                                    href={section.href}
                                    onClick={() => setSection(section.name)}
                                    className={`font-mono text-base tracking-tight transition-colors duration-200 ${
                                        isActive ? 
                                            "text-[#8B8AFF]" :
                                            "text-[#9AA0B2] hover:text-[#C7C9D9]"
                                    }`}
                                >
                                    {section.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    )
}
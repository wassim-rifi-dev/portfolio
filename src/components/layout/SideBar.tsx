'use client';

import { jetbrainsMono } from "@/app/fonts";
import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const sections = [
    { name: "home", href:"#" },
    { name: "about", href:"#about" },
    { name: "skills", href:"#skills" },
    { name: "projects", href:"#projects" },
    { name: "formation", href:"#formation" },
    { name: "contact", href:"#contact" },
];

const links = [
    { href: "https://github.com/wassim-rifi-dev", label: "GitHub", Icon: FiGithub },
    { href: "https://www.linkedin.com/in/wassim-rifi-0b842839a/", label: "LinkedIn", Icon: FiLinkedin },
    { href: "mailto:wassimrifi.dev@gmail.com", label: "Email", Icon: Mail },
];

const words = ["Code", "Build", "Improve", "Repeat"];

export default function SideBar() {
    const [active_section, setSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            setIsScrolled(window.scrollY > 24);

            const rendered = sections.flatMap(({ name }) => {
                const element = document.getElementById(name);
                return element ? [{ name, top: element.getBoundingClientRect().top }] : [];
            });

            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            const current = isAtBottom
                ? rendered.at(-1)
                : rendered.filter(({ top }) => top <= window.innerHeight * 0.4).at(-1);

            if (current) setSection(current.name);
        };

        const requestUpdate = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        requestUpdate();
        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);
        };
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                aria-controls="sidebar"
                className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#23273A] bg-[#1A1D28] text-[#9AA0B2] transition-colors hover:text-[#E6E8EF] lg:hidden"
            >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {isOpen && (
                <div
                    aria-hidden="true"
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                />
            )}

            <aside
                id="sidebar"
                className={`fixed left-0 top-0 z-40 flex h-dvh w-56 flex-col justify-between gap-6 overflow-y-auto bg-[#1A1D28] px-8 pb-6 pt-14 scrollbar-none transition-[translate,visibility] duration-300 [&::-webkit-scrollbar]:hidden lg:visible lg:translate-x-0 lg:gap-10 lg:border-r lg:bg-transparent lg:pb-8 lg:pt-28 lg:transition-[border-color] ${
                    isOpen ? "translate-x-0" : "invisible -translate-x-full"
                } ${isScrolled ? "lg:border-[#23273A]" : "lg:border-transparent"} ${jetbrainsMono.className}`}
            >
                <nav className="relative border-l border-[#23273A] pl-6">
                    <ul className="space-y-3 py-2 lg:space-y-5 lg:py-4">
                        {sections.map((section) => {
                            const isActive = active_section === section.name;

                            return (
                                <li key={section.name} className="group relative flex items-center">
                                    <span
                                        aria-hidden="true"
                                        className={`absolute -left-6.25 top-1/2 h-6 w-px -translate-y-1/2 bg-[#8B8AFF] shadow-[0_0_8px_#8B8AFF] transition-transform duration-300 ${
                                            isActive ? "scale-y-100" : "scale-y-0"
                                        }`}
                                    />

                                    <span className="relative mr-4 flex h-2 w-2">
                                        {isActive ? (
                                            <>
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B8AFF] opacity-75" />
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B8AFF]" />
                                            </>
                                        ) : (
                                            <span className="inline-flex h-2 w-2 scale-50 rounded-full bg-[#8B8AFF]/50 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
                                        )}
                                    </span>

                                    <a
                                        href={section.href}
                                        aria-current={isActive ? "location" : undefined}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-base tracking-tight transition-all duration-200 ${
                                            isActive
                                                ? "translate-x-0 font-semibold text-[#8B8AFF]"
                                                : "-translate-x-2 text-[#9AA0B2] group-hover:translate-x-0 group-hover:text-[#8B8AFF]"
                                        }`}
                                    >
                                        {section.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex flex-col justify-start gap-6 lg:gap-17">
                    <div className="flex flex-col items-start gap-4 lg:gap-5">
                        {links.map(({ href, label, Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-[#9AA0B2] transition-colors hover:text-[#E6E8EF]"
                            >
                                <Icon className="h-5 w-5" strokeWidth={2} />
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-1 font-mono text-sm text-[#9AA0B2] lg:gap-2">
                        {words.map((word) => (
                            <p key={word}>{word}</p>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    )
}

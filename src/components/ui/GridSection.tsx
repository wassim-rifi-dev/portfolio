'use client';

import { useEffect, useRef } from "react";

const GRID = "absolute inset-0 bg-[linear-gradient(to_right,#ffffff1f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-size-[50px_50px]";
const SPOTLIGHT = "radial-gradient(circle 220px at var(--x) var(--y), #000 0%, rgb(0 0 0 / 0.55) 30%, rgb(0 0 0 / 0.2) 60%, transparent 100%)";

export default function GridSection() {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const spotlight = spotlightRef.current;
        const section = spotlight?.parentElement?.parentElement;
        if (!spotlight || !section) return;

        const handleMove = (e: MouseEvent) => {
            const rect = section.getBoundingClientRect();
            spotlight.style.setProperty("--x", `${e.clientX - rect.left}px`);
            spotlight.style.setProperty("--y", `${e.clientY - rect.top}px`);
            spotlight.style.opacity = "1";
        };
        const handleLeave = () => {
            spotlight.style.opacity = "0";
        };

        section.addEventListener("mousemove", handleMove);
        section.addEventListener("mouseleave", handleLeave);

        return () => {
            section.removeEventListener("mousemove", handleMove);
            section.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <div aria-hidden="true" className="absolute inset-0">
            <div className={`${GRID} opacity-30`} />
            <div
                ref={spotlightRef}
                className="absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{ maskImage: SPOTLIGHT }}
            >
                <div className="absolute inset-0 bg-[#8B8AFF]/30" />
                <div className={GRID} />
            </div>
        </div>
    );
}

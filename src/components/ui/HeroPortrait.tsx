'use client';

import Image from "next/image";
import { useRef, type PointerEvent, type ReactNode } from "react";

const SIZES = "(min-width: 768px) 450px, 100vw";
const SPOTLIGHT = "radial-gradient(circle 150px at var(--x) var(--y), #000 0%, #000 40%, rgb(0 0 0 / 0.5) 70%, transparent 100%)";

export default function HeroPortrait({ children }: { children?: ReactNode }) {
    const spotlightRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: PointerEvent<HTMLDivElement>) => {
        const spotlight = spotlightRef.current;
        if (!spotlight) return;

        const rect = e.currentTarget.getBoundingClientRect();
        spotlight.style.setProperty("--x", `${e.clientX - rect.left}px`);
        spotlight.style.setProperty("--y", `${e.clientY - rect.top}px`);
        spotlight.style.opacity = "1";
    };

    const handleLeave = () => {
        if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    };

    return (
        <div
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className="relative aspect-3/4 w-full max-w-md justify-self-end overflow-hidden border border-[#2A2F40] bg-[#0A0A10]"
        >
            <Image
                src="/images/me_white_black.webp"
                alt="Wassim Rifi"
                fill
                preload
                sizes={SIZES}
                className="object-cover"
            />

            <div
                ref={spotlightRef}
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{ maskImage: SPOTLIGHT }}
            >
                <Image src="/images/me.webp" alt="" fill sizes={SIZES} className="object-cover" />
            </div>

            {children}
        </div>
    );
}

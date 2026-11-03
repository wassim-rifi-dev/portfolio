'use client';

import { useEffect, useState } from "react";

const DEFAULT_WORDS = [
    "Développeur Full-Stack Junior",
    "Spring Boot × React.js",
    "Laravel × Angular",
    "API REST & interfaces web"
]
const TYPE_SPEED = 90;
const DELETE_SPEED = 50;
const PAUSE = 1500;

export default function Typewrite() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = DEFAULT_WORDS[index];
        let timeout;

        if (!deleting && text === word) {
            timeout = setTimeout(() => setDeleting(true), PAUSE);
        } else if (deleting && text === "") {
            timeout = setTimeout(() => {
                setDeleting(false);
                setIndex((i) => (i + 1) % DEFAULT_WORDS.length);
            }, 300);
        } else {
            timeout = setTimeout(
                () => {
                setText(
                    deleting
                    ? word.slice(0, text.length - 1)
                    : word.slice(0, text.length + 1)
                );
                },
                deleting ? DELETE_SPEED : TYPE_SPEED
            );
        }

        return () => clearTimeout(timeout);
    } , [text , deleting , index]);


    return (
        <h3 className="mt-10 min-h-[2lh] text-xl text-[#8B8AFF] md:text-2xl 2xl:min-h-0">
            {text}
            <span
                aria-hidden="true"
                className={`ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-[#8B8AFF] ${
                    deleting ? "" : "animate-blink"
                } `}
            />
        </h3>
    )
}
"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Locale } from "@/i18n-config";

const LANGUAGES: { code: Locale; label: string }[] = [
    { code: "it", label: "Italiano" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
];

/* Bandiere in SVG: rendono uguali su tutti i sistemi (le emoji 🇮🇹 su Windows non si vedono). */
export function Flag({ code, className = "w-6 h-4" }: { code: Locale; className?: string }) {
    const uid = useId().replace(/:/g, "");
    const common = {
        className: `${className} shrink-0 rounded-[2px] ring-1 ring-black/10`,
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": true,
    } as const;

    switch (code) {
        case "it":
            return (
                <svg viewBox="0 0 3 2" {...common}>
                    <rect width="1" height="2" fill="#009246" />
                    <rect x="1" width="1" height="2" fill="#fff" />
                    <rect x="2" width="1" height="2" fill="#CE2B37" />
                </svg>
            );
        case "fr":
            return (
                <svg viewBox="0 0 3 2" {...common}>
                    <rect width="1" height="2" fill="#002395" />
                    <rect x="1" width="1" height="2" fill="#fff" />
                    <rect x="2" width="1" height="2" fill="#ED2939" />
                </svg>
            );
        case "de":
            return (
                <svg viewBox="0 0 5 3" {...common}>
                    <rect width="5" height="1" fill="#000" />
                    <rect y="1" width="5" height="1" fill="#DD0000" />
                    <rect y="2" width="5" height="1" fill="#FFCE00" />
                </svg>
            );
        case "en":
        default:
            return (
                <svg viewBox="0 0 60 30" {...common}>
                    <clipPath id={`uk-s-${uid}`}>
                        <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <clipPath id={`uk-t-${uid}`}>
                        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                    </clipPath>
                    <g clipPath={`url(#uk-s-${uid})`}>
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#uk-t-${uid})`} stroke="#C8102E" strokeWidth="4" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                </svg>
            );
    }
}

export default function LanguageSwitcher({
    lang,
    hrefFor,
}: {
    lang: Locale;
    hrefFor: (locale: Locale) => string;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Lingua / Language"
                className="flex items-center gap-2 h-11 px-3 text-sm uppercase tracking-wider text-gray-700 border border-transparent hover:border-gray-200 transition-colors"
            >
                <Flag code={lang} className="w-5 h-[14px]" />
                <span className="font-medium">{lang}</span>
                <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden
                >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            {open && (
                <ul
                    role="listbox"
                    className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-100 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.2)] py-2 z-50"
                >
                    {LANGUAGES.map((l) => (
                        <li key={l.code} role="option" aria-selected={l.code === lang}>
                            <Link
                                href={hrefFor(l.code)}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${l.code === lang ? "font-semibold text-black bg-gray-50" : "text-gray-600 hover:bg-gray-50 hover:text-black"
                                    }`}
                            >
                                <Flag code={l.code} className="w-5 h-[14px]" />
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export { LANGUAGES };

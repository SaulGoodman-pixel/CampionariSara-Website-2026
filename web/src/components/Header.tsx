"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import LanguageSwitcher, { Flag, LANGUAGES } from "@/components/LanguageSwitcher";

export default function Header({
    lang,
    dict,
}: {
    lang: Locale;
    dict: any;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: `/${lang}/azienda`, label: dict.nav.company },
        { href: `/${lang}/come-lavoriamo`, label: dict.nav.how_we_work },
        { href: `/${lang}/prodotti`, label: dict.nav.products },
        { href: `/${lang}/consulenza`, label: dict.nav.consultancy },
        { href: `/${lang}/contatti`, label: dict.nav.contacts },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Switch locale logic
    const redirectedPathName = (locale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <header
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
                }`}
        >
            <div className="mx-auto w-full px-[24px] md:px-[96px] h-full">
                <div className="flex h-20 lg:h-24 items-center justify-between">
                    {/* LEFT: Logo */}
                    <div className="flex items-center h-full shrink-0 nav:mr-10">
                        <Link href={`/${lang}`} className="relative block shrink-0 flex items-center">
                            <Image
                                src="/logo-csg.jpg"
                                alt="CSG — Campionari Sara Group"
                                width={1600}
                                height={253}
                                priority
                                unoptimized
                                className="h-8 sm:h-10 nav:h-10 2xl:h-11 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* CENTER: Nav Links */}
                    <nav className="hidden nav:flex items-center h-full gap-7 2xl:gap-9">
                        {navLinks.map((link) => {
                            // Check if current path matches the link
                            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-[13px] 2xl:text-sm uppercase tracking-wider whitespace-nowrap transition-colors flex items-center h-full decoration-2 underline-offset-4 ${isActive
                                        ? "font-bold text-black underline"
                                        : "text-gray-600 hover:text-black font-normal"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* RIGHT: Lang + CTA */}
                    <div className="hidden md:flex items-center gap-4 2xl:gap-5 h-11 ml-auto nav:ml-10 pl-6 2xl:pl-8 border-l border-gray-200">
                        <LanguageSwitcher lang={lang} hrefFor={redirectedPathName} />
                        <Link
                            href={`/${lang}/contatti`}
                            className="inline-flex items-center h-11 px-6 bg-black text-white text-xs font-medium uppercase tracking-[0.15em] hover:bg-gray-800 transition-colors whitespace-nowrap"
                        >
                            {dict.nav.cta_quote}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="nav:hidden p-2 -mr-2 md:ml-4" aria-label="Menu" onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>




                {/* Mobile Nav Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 md:px-[96px] nav:hidden flex flex-col gap-4 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium hover:text-gray-600"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-100 md:hidden">
                            {LANGUAGES.map((l) => (
                                <Link
                                    key={l.code}
                                    href={redirectedPathName(l.code)}
                                    onClick={() => setIsOpen(false)}
                                    aria-label={l.label}
                                    className={`flex items-center justify-center gap-2 py-2.5 text-sm uppercase border transition-colors ${lang === l.code ? "border-black font-semibold" : "border-gray-200 text-gray-500"
                                        }`}
                                >
                                    <Flag code={l.code} className="w-5 h-[14px]" />
                                    {l.code}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href={`/${lang}/contatti`}
                            onClick={() => setIsOpen(false)}
                            className="md:hidden bg-black text-white text-center py-3 mt-2 uppercase tracking-wide"
                        >
                            {dict.nav.cta_quote}
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

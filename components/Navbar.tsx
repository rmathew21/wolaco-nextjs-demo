"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "SHOP", href: "/shop" },
    { label: "MEN", href: "/men" },
    { label: "WOMEN", href: "/women" },
    { label: "COMPRESSION", href: "/compression" },
    { label: "ABOUT", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setHasShadow(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-30 bg-black/90 backdrop-blur-sm ${
                hasShadow ? "shadow-md shadow-black/40" : ""
            }`}
            >
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center gap-2">
                        {/* If you add a logo file to /public, you can swap this text out for <Image> */}
                        <span className="text-sm font-semibold tracking-[0.35em] text-white">
                            WOLACO
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden items-center gap-8 md:flex">
                        <ul className="flex items-center gap-6 text-xs font-medium tracking-[0.25em] text-neutral-200">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-white"
                                        >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Right-side actions */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/account"
                                className="text-[11px] font-medium tracking-[0.25em] text-neutral-300 hover:text-white"
                            >
                                Account
                            </Link>
                            <Link href="/cart"
                            className="rounded-full border border-neutral-600 bg-white text-[11px] font-medium uppercase tracking-[0.25em] text-black transition hover:bg-neutral-200"
                            >
                                <span className="px-4 py-1 5 inline-block">CART (0)</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button 
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-neutral-700 p-2 text-neutral-200 md:hidden"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        >
                        <span className="sr-only">Toggle menu</span>
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`h-0.5 w-5 bg-neutral-100 transition-transform ${
                                    isOpen ? "translate-y-[5px] rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`h-0.5 w-5 bg-neutral-100 transition-opacity ${
                                    isOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`h-0.5 w-5 bg-neutral-100 transition-transform ${
                                    isOpen ? "translate-y-[5px] -rotate-45" : ""
                                }`}
                            />
                        </div>
                    </button>
                </nav>

                {/* Mobile menu panel */}
                {isOpen && (
                    <div className="border-t border-neutral-800 bg-black/95 md:hidden">
                        <div className="mx-auto max-w-6xl px-4 py-4 space-y-4">
                            <ul className="space-y-3 text-xs font-medium tracking-[0.25em] text-neutral-200">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                        href={link.href}
                                        className="block py-1 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-3">
                                <Link 
                                    href="/account"
                                    className="text-[11px] font-medium tracking-[0.25em] text-neutral-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ACCOUNT
                                </Link> 
                                <Link 
                                    href="/cart"
                                    className="inline-flex items-center justify-center rounded-full border border-neutral-600 bg-white px-5 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition hover:bg-neutral-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    CART (0)
                                </Link> 
                            </div>
                        </div>
                    </div>
                )}
        </header>
    );
}
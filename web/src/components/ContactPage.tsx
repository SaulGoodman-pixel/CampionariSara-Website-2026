"use client";

import { useState } from "react";
import { Locale } from "@/i18n-config";
import PageShell from "@/components/PageShell"; // Import PageShell

export default function ContactPage({
    lang,
    dict,
}: {
    lang: Locale;
    dict: any;
}) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);

        if (!formData.get("privacy")) {
            setError(dict.contacts.privacy_error);
            setLoading(false);
            return;
        }

        const data = Object.fromEntries(formData.entries());
        data.privacy = "true";

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSuccess(true);
            } else {
                const json = await res.json();
                setError(json.error || "Something went wrong");
            }
        } catch (err) {
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="container-custom pt-12 text-center">
                <h1 className="text-4xl font-bold mb-4">{dict.contacts.thank_you_title}</h1>
                <p className="text-xl text-gray-600">
                    {dict.contacts.thank_you_text}
                </p>
            </div>
        );
    }

    return (
        <PageShell title={dict.contacts.title} subtitle={dict.contacts.text}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Info (4 columns) */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="space-y-10">
                        {/* Email */}
                        <div>
                            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-4">{dict.contacts.email_label}</h3>
                            <a href="mailto:lf@campionarisara.com" className="text-2xl md:text-3xl font-light hover:text-gray-600 transition-colors break-words">
                                lf@campionarisara.com
                            </a>
                        </div>

                        {/* WhatsApp/Tel */}
                        <div>
                            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-4">WhatsApp / Tel</h3>
                            <a href="https://wa.me/393517831006" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-light hover:text-gray-600 transition-colors">
                                +39 351 7831006
                            </a>
                        </div>

                        {/* Addresses */}
                        <div className="space-y-8 pt-4">
                            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-2">{dict.contacts.locations_label}</h3>

                            {/* IT */}
                            <div className="border-l-2 border-black pl-6 py-2">
                                <span className="font-bold block mb-1">Italia</span>
                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    Campionari Sara Group S.r.l.<br />
                                    Via Gioberti 22 — 20851<br />
                                    Lissone (MB) — Italia
                                </p>
                            </div>

                            {/* CZ */}
                            <div className="border-l-2 border-gray-200 pl-6 py-2">
                                <span className="font-bold block mb-1">{dict.contacts.czech_republic}</span>
                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    Sampleworld s.r.o.<br />
                                    Okružní 600 — 28522<br />
                                    Zruč nad Sázavou — Repubblica Ceca
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form (7 columns) */}
                <div className="lg:col-span-7">
                    <div className="bg-white border border-black/5 p-8 md:p-12 shadow-xl rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                                    {dict.contacts.name_label}
                                </label>
                                <input name="name" required className="w-full p-4 bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-black outline-none transition-all rounded-lg" />
                            </div>

                            {/* Company / Email Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                                        {dict.contacts.company_label}
                                    </label>
                                    <input name="company" required className="w-full p-4 bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-black outline-none transition-all rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                                        Email
                                    </label>
                                    <input name="email" type="email" required className="w-full p-4 bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-black outline-none transition-all rounded-lg" />
                                </div>
                            </div>

                            {/* Phone / Type Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                                        {dict.contacts.phone_label}
                                    </label>
                                    <input name="phone" className="w-full p-4 bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-black outline-none transition-all rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                                        {dict.contacts.sector_label}
                                    </label>
                                    <div className="relative">
                                        <select name="type" className="w-full p-4 bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-black outline-none transition-all appearance-none cursor-pointer rounded-lg">
                                            <option value="Sample Books">{dict.contacts.sector_sample_books}</option>
                                            <option value="Hangers">{dict.contacts.sector_hangers}</option>
                                            <option value="Color Cards">{dict.contacts.sector_color_cards}</option>
                                            <option value="Memos">{dict.contacts.sector_memos}</option>
                                            <option value="Legatoria">{dict.contacts.sector_bookbinding}</option>
                                            <option value="Other">{dict.contacts.sector_other}</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            ↓
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                                    {dict.contacts.message_label}
                                </label>
                                <textarea name="message" required rows={4} className="w-full p-4 bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-black outline-none transition-all resize-none rounded-lg" />
                            </div>

                            {/* Allegato */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                                    {dict.contacts.attachment_label ?? "Allegato"}
                                </label>
                                <input
                                    type="file"
                                    name="attachment"
                                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"
                                    className="w-full p-4 bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-black outline-none transition-all rounded-lg text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-bold file:uppercase file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer"
                                />
                            </div>

                            {/* Privacy */}
                            <div className="pt-2">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input type="checkbox" name="privacy" required className="mt-1 w-5 h-5 flex-shrink-0 cursor-pointer accent-black" />
                                    <span className="text-xs text-gray-400 leading-snug group-hover:text-gray-800 transition-colors">
                                        {dict.contacts.privacy_text}
                                        <a href={`/${lang}/privacy`} target="_blank" className="underline font-bold decoration-black/10 hover:decoration-black">{dict.contacts.privacy_link}</a>.
                                    </span>
                                </label>
                            </div>

                            {error && <p className="text-red-600 text-sm font-bold bg-red-50 p-4 border-l-4 border-red-600">{error}</p>}

                            <button type="submit" disabled={loading} className="w-full bg-black text-white p-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-black/20 disabled:opacity-50 rounded-lg">
                                {loading ? '...' : dict.contacts.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </PageShell>
    );
}

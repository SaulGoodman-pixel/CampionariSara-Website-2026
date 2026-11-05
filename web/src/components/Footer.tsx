import Link from 'next/link'
import { Locale } from '@/i18n-config'

export default function Footer({ lang, dict }: { lang: Locale; dict: any }) {
    return (
        <footer className="pt-16 pb-8 border-t border-gray-100">
            <div className="mx-auto w-full px-[24px] md:px-[96px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tight">Campionari Sara Group</h3>
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                            {dict.home.hero.subtitle}
                        </p>
                    </div>

                    {/* Contacts */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{dict.nav.contacts}</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="mailto:lf@campionarisara.com" className="hover:text-black transition-colors">
                                        lf@campionarisara.com
                                    </a>
                                </li>
                                <li>
                                    <span className="font-semibold text-gray-900">WhatsApp:</span> 3517831006
                                </li>
                                <li>{dict.footer.vat}</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{dict.footer.locations_label}</h4>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li>
                                    <span className="font-semibold text-gray-900 block">Italia</span>
                                    Campionari Sara Group S.r.l.<br />
                                    Via Gioberti 22 — 20851 Lissone (MB)
                                </li>
                                <li>
                                    <span className="font-semibold text-gray-900 block">{dict.footer.czech_republic}</span>
                                    Sampleworld s.r.o.<br />
                                    Okružní 600 — 28522 Zruč nad Sázavou
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>{dict.footer.rights}</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href={`/${lang}/privacy`} className="hover:text-black">{dict.footer.links.privacy}</Link>
                        <Link href={`/${lang}/cookies`} className="hover:text-black">{dict.footer.links.cookies}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

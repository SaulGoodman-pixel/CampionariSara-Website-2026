import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import Image from 'next/image'

type HomeProduct = { id: string; title: string; desc: string; image: string }

export default async function Home({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const products: HomeProduct[] = dict.products.list

    const stats = [
        { value: '40+', label: dict.home.stats.years_label, text: dict.home.intro.list[1] },
        { value: '100%', label: dict.home.stats.supply_chain_label, text: dict.home.intro.text },
        { value: dict.home.stats.world_title, label: dict.home.stats.export_label, text: dict.home.stats.countries },
    ]

    return (
        <main>
            {/* ── HERO — full-bleed, sfuma nel colore della pagina ─────── */}
            <section className="relative -mx-[24px] md:-mx-[96px] min-h-[640px] h-[calc(88vh-96px)] max-h-[860px] flex items-center overflow-hidden">
                <Image
                    src="/product-tessuti.jpg"
                    alt=""
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Velatura laterale per la leggibilità del testo */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />
                {/* Sfumatura verso il fondo pagina: niente stacco netto */}
                <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-b from-transparent via-brand-cream/60 to-brand-cream" />

                <div className="relative z-10 w-full px-[24px] md:px-[96px] pb-32 md:pb-40">
                    <div className="max-w-3xl">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-6 animate-fade-in">
                            {dict.home.hero.eyebrow}
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold leading-[0.98] tracking-tight text-white mb-8 animate-fade-in-delay">
                            Campionari<br />Sara Group
                        </h1>
                        <div className="w-14 h-[2px] bg-[#9b1b23] mb-8 animate-fade-in-delay" />
                        <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed mb-10 animate-fade-in-delay-2">
                            {dict.home.hero.subtitle}
                        </p>
                        <Link
                            href={`/${lang}/contatti`}
                            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 animate-fade-in-delay-2"
                        >
                            {dict.home.hero.cta_primary}
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── IDENTITY — card che si sovrappone alla foto ──────────── */}
            <section className="relative z-10 -mt-24 md:-mt-32">
                <div className="bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {stats.map((s) => (
                        <div key={s.label} className="px-8 py-10 md:px-10 md:py-12">
                            <p className="text-4xl md:text-5xl font-bold tracking-tight tabular-nums mb-3">
                                {s.value}
                            </p>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#9b1b23] mb-4">
                                {s.label}
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                                {s.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PRODOTTI ─────────────────────────────────────────────── */}
            <section className="pt-24 md:pt-32 pb-24 md:pb-28">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-4">
                            {dict.home.products.kicker}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            {dict.home.what_we_do.title}
                        </h2>
                    </div>
                    <Link
                        href={`/${lang}/prodotti`}
                        className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors whitespace-nowrap"
                    >
                        {dict.nav.products} <span aria-hidden>→</span>
                    </Link>
                </div>

                {/* Griglia 4×2 su desktop: il primo prodotto occupa un blocco 2×2 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((p, i) => (
                        <Link
                            key={p.id}
                            href={`/${lang}/prodotti`}
                            className={`group relative block overflow-hidden bg-white ${i === 0 ? 'col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto' : 'aspect-[4/3]'
                                }`}
                        >
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes={i === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 50vw, 25vw'}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between gap-4">
                                <div>
                                    <p className={`font-semibold text-white ${i === 0 ? 'text-xl md:text-2xl' : 'text-base'}`}>
                                        {p.title}
                                    </p>
                                    <p className="text-sm text-white/75 mt-1 hidden sm:block">{p.desc}</p>
                                </div>
                                <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" aria-hidden>→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── CTA FINALE ───────────────────────────────────────────── */}
            <section className="-mx-[24px] md:-mx-[96px] bg-white px-[24px] md:px-[96px] py-24 md:py-28">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-5">
                        {dict.home.contacts.kicker}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                        {dict.home.contacts.title}
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed mb-10">
                        {dict.home.contacts.text}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={`/${lang}/contatti`}
                            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
                        >
                            {dict.home.contacts.cta_form}
                        </Link>
                        <a
                            href="https://wa.me/393517831006"
                            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-black px-8 py-4 text-sm uppercase tracking-widest hover:border-black transition-colors"
                        >
                            {dict.home.contacts.cta_whatsapp}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

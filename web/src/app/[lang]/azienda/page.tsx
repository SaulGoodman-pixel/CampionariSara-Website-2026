import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import PageShell from '@/components/PageShell'
import Image from "next/image"
import Link from "next/link"

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    const productImages = [
        "/product-tessuti.jpg",
        "/products/cartelle/cartelle-1.png",
        "/product-memos.png",
        "/product-legatoria.png",
        "/product-campionario.jpg"
    ];

    return (
        <PageShell title={dict.azienda.title} subtitle={dict.azienda.subtitle}>
            <div className="space-y-16">
                {/* Two-column: text left, images right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left: all text */}
                    <div className="text-base md:text-lg text-gray-600 leading-relaxed space-y-6">
                        {dict.azienda.paragraphs_top.map((p: string, i: number) => (
                            <p key={i}>{p}</p>
                        ))}
                        {dict.azienda.paragraphs_bottom.map((p: string, i: number) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    {/* Right: company images stacked */}
                    <div className="flex flex-col gap-6">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/azienda-sede-1.jpg"
                                fill
                                alt="Sara Group Headquarters"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/azienda-sede-2.jpg"
                                fill
                                alt="Production Facility"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Carousel Products Section */}
                <div className="pt-8 space-y-8 animate-fade-in-delay-2">
                    <div className="flex justify-between items-end border-t border-black/5 pt-12">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
                            {dict.azienda.products_title}
                        </h2>
                        <Link
                            href={`/${lang}/prodotti`}
                            className="text-sm font-bold uppercase tracking-wider underline underline-offset-4 hover:text-gray-600 transition-colors"
                        >
                            {dict.azienda.view_all}
                        </Link>
                    </div>

                    <Link href={`/${lang}/prodotti`} className="block group">
                        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide no-scrollbar">
                            {productImages.map((src, i) => (
                                <div
                                    key={i}
                                    className="relative flex-shrink-0 w-64 md:w-80 h-48 md:h-60 overflow-hidden rounded-2xl group-hover:opacity-90 transition-opacity"
                                >
                                    <Image
                                        src={src}
                                        fill
                                        alt="Product Preview"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </Link>
                </div>
            </div>
        </PageShell>
    );
}

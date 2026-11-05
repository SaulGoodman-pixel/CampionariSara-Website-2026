import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import PageShell from '@/components/PageShell'
import Image from 'next/image'

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <PageShell title={dict.consultancy.title} subtitle={dict.consultancy.subtitle}>
            <div className="grid md:grid-cols-3 gap-12">
                {dict.consultancy.services.map((item: any, i: number) => (
                    <div key={i} className="bg-gray-50 p-8 border border-gray-100">
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-12">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/consulenza-1.jpg" alt="Consulenza Sara - 1" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/consulenza-2.jpg" alt="Consulenza Sara - 2" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/consulenza-3.jpg" alt="Consulenza Sara - 3" fill className="object-cover" />
                </div>
            </div>

            <div className="text-center py-12 bg-black text-white">
                <h2 className="text-2xl font-bold mb-4">{dict.consultancy.ctaTitle}</h2>
                <a href={`/${lang}/contatti`} className="inline-block border border-white px-8 py-3 uppercase text-sm hover:bg-white hover:text-black transition-colors">
                    {dict.consultancy.ctaButton}
                </a>
            </div>
        </PageShell>
    )
}

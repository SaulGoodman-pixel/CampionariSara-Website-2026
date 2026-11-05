import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import PageShell from '@/components/PageShell'

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <PageShell title={dict.how_we_work.title} subtitle={dict.how_we_work.subtitle}>
            <div className="space-y-8 max-w-4xl border-l-2 border-black pl-8 ml-4">
                {dict.how_we_work.steps.map((item: any, i: number) => (
                    <div key={i} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[41px] top-2 w-5 h-5 bg-white border-4 border-black rounded-full"></div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Highlights Section */}
            <div className="w-full bg-gray-50 rounded-2xl border border-gray-200 py-14 md:py-16 px-6 md:px-12 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {dict.how_we_work.highlights.map((item: any, i: number) => (
                        <div key={i} className="space-y-3">
                            <div className="w-10 h-1 bg-black mb-4 rounded-full"></div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageShell>
    )
}

import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import PageShell from '@/components/PageShell'

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <PageShell title={dict.news.title}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dict.news.items.map((item: any, i: number) => (
                    <article key={i} className="border-t border-black pt-4 group cursor-pointer">
                        <div className="flex justify-between items-baseline mb-3 text-sm text-gray-500">
                            <span>{item.category}</span>
                            <span>{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors leading-tight">
                            {item.title}
                        </h3>
                    </article>
                ))}
            </div>
        </PageShell>
    )
}

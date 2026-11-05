import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import PageShell from '@/components/PageShell'
import ProductGrid from '@/components/ProductGrid'

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <PageShell title={dict.products.title} subtitle={dict.products.subtitle}>
            <ProductGrid products={dict.products.list} lang={lang} dict={dict} />
        </PageShell>
    )
}

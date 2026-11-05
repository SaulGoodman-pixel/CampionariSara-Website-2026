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
        <PageShell title={dict.cookie.title}>
            <div className="prose prose-lg max-w-3xl">
                <p>
                    {dict.cookie.text}
                </p>
                <p>{dict.cookie.todo}</p>
            </div>
        </PageShell>
    )
}

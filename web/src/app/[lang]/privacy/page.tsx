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
        <PageShell title={dict.privacy.title}>
            <div className="prose prose-lg max-w-3xl">
                <p>
                    {dict.privacy.text}
                </p>
                <p>{dict.privacy.todo}</p>
            </div>
        </PageShell>
    )
}

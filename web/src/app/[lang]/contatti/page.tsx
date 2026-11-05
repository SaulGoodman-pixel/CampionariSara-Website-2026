import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import ContactPage from '@/components/ContactPage'

export default async function Page({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    return <ContactPage lang={lang} dict={dict} />
}

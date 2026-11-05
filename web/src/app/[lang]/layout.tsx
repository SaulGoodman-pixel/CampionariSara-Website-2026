import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/get-dictionary";
import { i18n } from "@/i18n-config";

export async function generateStaticParams() {
    return i18n.locales.map((lang) => ({ lang }));
}

// Nota: in Next 16 può capitare che params venga trattato come Promise.
export default async function LangLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: "it" | "en" } | Promise<{ lang: "it" | "en" }>;
}) {
    const { lang } = await Promise.resolve(params);
    const dict = await getDictionary(lang);

    return (
        <div className="flex min-h-screen flex-col">
            {/* Se Header/Footer non accettano props, togli lang/dict */}
            <Header lang={lang} dict={dict} />
            <main className="w-full flex-1">
                <div className="mx-auto w-full px-[24px] md:px-[96px]">
                    {children}
                </div>
            </main>
            <Footer lang={lang} dict={dict} />

            {/* WhatsApp floating button */}
            <a
                href="https://wa.me/393517831006"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
                aria-label="Contattaci su WhatsApp"
            >
                <svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.348L4 29l7.87-2.207A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.917a9.9 9.9 0 01-5.031-1.373l-.36-.214-4.67 1.309 1.32-4.562-.234-.373A9.916 9.916 0 016.083 15C6.083 9.514 10.514 5.083 16 5.083S25.917 9.514 25.917 15 21.486 24.917 16 24.917zm5.406-7.422c-.296-.148-1.751-.863-2.022-.962-.271-.099-.468-.148-.665.148-.197.296-.763.962-.935 1.159-.172.197-.344.222-.64.074-.296-.148-1.249-.46-2.379-1.467-.879-.784-1.473-1.752-1.646-2.048-.172-.296-.018-.456.13-.603.132-.132.296-.344.444-.516.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.074-.148-.665-1.604-.911-2.197-.24-.578-.484-.5-.665-.509l-.566-.01c-.197 0-.518.074-.79.37s-1.036 1.012-1.036 2.468 1.061 2.863 1.209 3.06c.148.197 2.089 3.19 5.063 4.474.708.306 1.26.489 1.69.626.71.226 1.356.194 1.867.118.569-.085 1.751-.716 1.998-1.408.247-.691.247-1.284.172-1.408-.074-.123-.271-.197-.567-.345z"/>
                </svg>
            </a>
        </div>
    );
}

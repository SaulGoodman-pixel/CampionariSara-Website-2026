import { ReactNode } from "react";

interface PageShellProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    align?: "left" | "center" | "right";
}

export default function PageShell({ title, subtitle, children, align = "left" }: PageShellProps) {
    const alignmentClasses = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto"
    };

    return (
        <div className="w-full pt-10 md:pt-12 pb-24 fade-in">
            {/* Header Block */}
            <div className={`flex flex-col mb-12 md:mb-16 ${alignmentClasses[align]}`}>
                <h1 className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 text-black ${align === 'right' ? 'text-right' : 'text-left'} w-full`}>
                    {title}
                </h1>
                {subtitle && (
                    <p className={`text-lg md:text-xl text-gray-600 leading-relaxed ${align === 'right' ? 'text-right' : 'text-left'} w-full`}>
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-12 md:mb-16 w-full" />

            {/* Main Content */}
            <div className={`w-full space-y-12 md:space-y-16`}>
                {children}
            </div>
        </div>
    );
}

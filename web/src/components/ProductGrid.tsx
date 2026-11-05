"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
    id: string;
    title: string;
    desc: string;
    longDesc: string;
    image: string;
    images?: string[];
}

interface ProductGridProps {
    products: Product[];
    lang: string;
    dict: any;
}

export default function ProductGrid({ products, lang, dict }: ProductGridProps) {
    // 1. Default selection to 'campionari'
    const [activeId, setActiveId] = useState<string | null>("campionari");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const activeProduct = products.find(p => p.id === activeId);
    const displayImages = activeProduct?.images || (activeProduct ? [activeProduct.image] : []);

    // 2. Auto-sliding logic
    useEffect(() => {
        if (!activeProduct || displayImages.length <= 1 || isGalleryOpen) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeProduct, displayImages.length, isGalleryOpen]);

    // Reset index when product changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeId]);

    return (
        <div className="space-y-12">
            {/* Grid of Interactive Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {products.map((product) => (
                    <button
                        key={product.id}
                        onClick={() => {
                            if (activeId === product.id) {
                                // Se è già aperto, lo chiudiamo
                                setActiveId(null);
                            } else {
                                setActiveId(product.id);
                            }
                        }}
                        className={`
                            relative h-20 flex items-center justify-center bg-white border outline-none
                            rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-500
                            hover:border-black hover:shadow-xl hover:-translate-y-1 hover:z-20
                            active:outline-none focus:outline-none
                            ${activeId === product.id ? "border-black border-2 shadow-xl -translate-y-1 z-20 bg-white" : "border-gray-200 z-10"}
                        `}
                    >
                        <span className="px-2 text-center leading-tight">{product.title}</span>
                        {activeId === product.id && (
                            <div className="absolute top-2 right-2">
                                <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></span>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Detail View */}
            {activeProduct && (
                <div className="mt-8 bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-700 min-h-[500px]">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Interactive Photo Gallery Toggle */}
                        <div
                            className="relative bg-gray-50 h-[400px] md:h-auto overflow-hidden cursor-pointer group"
                            onClick={() => setIsGalleryOpen(true)}
                        >
                            {displayImages.map((src, idx) => (
                                <div
                                    key={src + idx}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                >
                                    <Image
                                        src={src}
                                        alt={activeProduct.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            ))}

                            {/* Overlay Info */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-bold text-xs uppercase tracking-widest text-black">
                                    {dict.common.expand_gallery}
                                </div>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {displayImages.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1 transition-all duration-500 rounded-full ${idx === currentImageIndex ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-10 md:p-20 flex flex-col justify-center bg-white">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter leading-none">
                                {activeProduct.title}
                            </h2>
                            <div className="w-20 h-1.5 bg-black mb-10"></div>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-normal">
                                {activeProduct.longDesc}
                            </p>

                            <div className="mt-12 flex items-center gap-8">
                                <button
                                    onClick={() => setActiveId(null)}
                                    className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
                                >
                                    {dict.common.close}
                                </button>
                                <div className="h-px flex-1 bg-gray-100" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Fullscreen Gallery Overlay */}
            {isGalleryOpen && activeProduct && (
                <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-500 flex flex-col">
                    <div className="p-6 md:p-10 flex justify-between items-center border-b border-gray-100">
                        <h3 className="text-sm font-bold uppercase tracking-widest">{activeProduct.title} — Gallery</h3>
                        <button
                            onClick={() => setIsGalleryOpen(false)}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 hover:bg-black hover:text-white transition-all text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 md:p-12">
                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                            {displayImages.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl bg-gray-50 group/item hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5"
                                >
                                    <Image
                                        src={src}
                                        alt={`${activeProduct.title} ${idx + 1}`}
                                        fill
                                        className="object-cover p-2 md:p-4 group-hover/item:scale-110 transition-transform duration-700"
                                    />

                                    {/* Subtle Overlay Label */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md py-2 px-3 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black text-center">
                                            {activeProduct.title} #{idx + 1}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-10 border-t border-gray-100 bg-white flex justify-center">
                        <button
                            onClick={() => setIsGalleryOpen(false)}
                            className="bg-black text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                            {dict.common.back_to_products}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

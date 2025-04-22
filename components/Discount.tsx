'use client'

import { scrollToSection } from "@/utils/functions"

export const Discount = () => {
    return (
        <div className="w-full min-h-40 md:py-0 py-10 px-5 bg-yellow-100 flex justify-center items-center">
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-zinc-800 md:text-4xl text-2xl font-semibold">Sabias que ofrecemos 1 mes GRATIS para todas las instituciones?</h1>
                <div className="flex md:flex-row flex-col md:items-center items-start gap-5">
                    <p className="text-zinc-500">
                        Contactanos hoy y obtene tu plataforma durante 30 días sin costo.
                    </p>
                    <button onClick={() => scrollToSection('plans')} className="text-zinc-700 border border-yellow-400 px-3 py-1 rounded-lg cursor-pointer hover:bg-yellow-200">Planes</button>
                    <button onClick={() => scrollToSection('contact')} className="text-zinc-700 bg-yellow-200 border border-yellow-300  px-3 py-1 rounded-lg cursor-pointer hover:border-yellow-500">Empezar ya</button>
                </div>
            </div>
        </div>
    )
}
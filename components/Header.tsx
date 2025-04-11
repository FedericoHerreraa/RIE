'use client'

import { scrollToSection } from "@/utils/functions";
import { architects } from "@/fonts/fonts";

export const Header = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center md:px-20 md:gap-0 gap-5 py-5">
            <div>
                <h1 className={`${architects.className} text-4xl`}>RIE</h1>
            </div>
            <div className="flex items-center md:text-xl md:gap-10 gap-7 text-zinc-700 cursor-pointer">
                <p className="" onClick={() => scrollToSection('proposal')}>La propuesta</p>
                <p className="" onClick={() => scrollToSection('knowus')}>Quiénes somos</p>
                <p className="" onClick={() => scrollToSection('plans')}>Planes</p>
            </div>
        </div>
    )
}
'use client'

import { scrollToSection } from "@/utils/functions";
import { PiSunHorizon } from "react-icons/pi";


export const Header = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center md:px-20 md:gap-0 gap-5 py-5">
            <div>
                <PiSunHorizon className="text-yellow-500 md:text-5xl text-6xl" />
            </div>
            <div className="flex items-center md:text-xl md:gap-10 gap-7 text-zinc-700 cursor-pointer">
                <p className="" onClick={() => scrollToSection('proposal')}>La propuesta</p>
                <p className="" onClick={() => scrollToSection('knowus')}>Quiénes somos</p>
                <p className="" onClick={() => scrollToSection('plans')}>Planes</p>
            </div>
        </div>
    )
}
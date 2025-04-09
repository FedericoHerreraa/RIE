'use client'

import { scrollToSection } from "@/utils/functions";
import { PiSunHorizon } from "react-icons/pi";


export const Header = () => {
    return (
        <div className="flex justify-between items-center px-20 py-5">
            <div>
                <PiSunHorizon size={50} className="text-yellow-500"/>
            </div>
            <div className="flex items-center text-xl gap-10 text-zinc-700 cursor-pointer">
                <p className="" onClick={() => scrollToSection('proposal')}>La propuesta</p>
                <p className="" onClick={() => scrollToSection('knowus')}>Quienes somos</p>
                <p className="" onClick={() => scrollToSection('plans')}>Planes</p>
            </div>
        </div>
    )
}
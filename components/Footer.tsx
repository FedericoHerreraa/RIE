import { architects } from "@/fonts/fonts"
import Image from "next/image";
import asneedLogo from '@/public/asneedlogo.png'

export const Footer = () => {
    return (
        <footer className="bg-[url('/bg-footer2.png')] bg-cover min-h-[50vh]">
            <div className="flex flex-col items-center gap-2 mt-10 py-20">
                <h1 className={`font-extralight text-8xl ${architects.className}`}>RIE</h1>
                <p className="text-zinc-600 text-lg">Red Integral Educativa</p>
            </div>
            <div className="flex justify-center items-center">
                <p>
                    Desarrollado por <a href="https://www.asneedsolutions.com" target="_blank" className="font-bold hover:underline">AsNeed Solutions</a>
                </p>
                <Image
                    src={asneedLogo}
                    alt="Logo de AsNeed"
                    width={45}
                    height={45}
                />
            </div>
        </footer>
    )
}
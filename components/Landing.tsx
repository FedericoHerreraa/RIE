
// import Image from "next/image"
import { architects } from "@/fonts/fonts"

export const Landing = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center h-[45vh]">
                <h1 className={`text-9xl font-extralight mb-5 text-zinc-700 ${architects.className}`}>RIE</h1>
                <p className="mb-10 text-2xl text-zinc-500">Red Integral Educativa</p>
                <button className="bg-amber-300/30 px-5 py-2 rounded-full cursor-pointer border border-amber-300/30 hover:border-amber-300 text-zinc-700">
                    Comenzar
                </button>
            </div>
            <div className="flex items-center justify-around mt-10 mx-auto w-[90%]">
                <div className="w-1/2">
                    {/* <Image
                        src={''}
                        alt="landing"
                    /> */}
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <h2 className={`mb-10 text-6xl font-extralight text-zinc-700 ${architects.className}`}>La propuesta</h2>
                    <p className="text-center mx-20 text-zinc-500">En el contexto educativo actual, las instituciones requieren plataformas digitales que integren comunicación, organización y presentación institucional en un solo sitio web. Esta propuesta plantea el desarrollo de una plantilla web versátil, adaptable a distintas instituciones educativas (nivel inicial, primario y secundario), combinando funcionalidades de gestión académica y un sitio corporativo.</p>
                </div>
            </div>
        </section>
    )
}
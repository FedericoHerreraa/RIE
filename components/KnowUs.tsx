import Image from "next/image"
import asneedImg from '@/public/asneedlogo.png'

export const KnowUs = () => {
    return (
        <div id="knowus" className="w-[90%] mx-auto mt-20 min-h-[20vh] flex md:flex-row flex-col items-center justify-between md:gap-20 gap-7">
            <div className="md:w-3/4">
                <h1 className="font-extralight text-3xl">Nosotros somos <span className="font-semibold">AsNeed Solutions</span></h1>
                <p className="mt-5 text-zinc-600">En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos aplicaciones móviles, plataformas web y redes sociales, completamente personalizadas para cubrir las necesidades de tu negocio.</p>
            </div>
            <div className="md:w-1/6">
                <Image
                    src={asneedImg}
                    alt="AsNeed Solutions"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}
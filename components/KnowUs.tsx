
import Image from "next/image"
import asneedImg from '@/public/asneedlogo.png'

export const KnowUs = () => {
    return (
        <div className="w-[90%] mx-auto mt-20 h-[20vh] flex items-center justify-between gap-20">
            <div className="w-3/4">
                <h1 className="font-extralight text-3xl">Nosotros somos <span className="font-semibold">AsNeed Solutions</span></h1>
                <p className="mt-5 text-zinc-600">En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos aplicaciones móviles, plataformas web y redes sociales, completamente personalizadas para cubrir las necesidades de tu negocio.</p>
            </div>
            <div className="w-1/6">
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
'use client'
import { motion } from "framer-motion"
import { architects } from "@/fonts/fonts"
import { scrollToSection } from "@/utils/functions"

export const Landing = () => {
    return (
        <section className="mb-20">
            <div className="flex flex-col items-center justify-center min-h-[60vh]">

                <motion.section
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className={`text-9xl font-extralight mb-5 text-zinc-700 ${architects.className}`}>RIE</h1>
                </motion.section>
                
                <motion.section
                    initial={{ y: -60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="md:mb-5 mb-7 text-3xl text-zinc-500 font-extralight">
                        <span className="font-bold text-zinc-900">R</span>ed <span className="font-bold text-zinc-900">I</span>ntegral <span className="font-bold text-zinc-900">E</span>ducativa
                    </p>
                </motion.section>

                <motion.section
                    initial={{ y: -80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >    
                    <p className="md:mb-5 mb-10 text-zinc-500 md:text-left text-center">
                        Una plataforma educativa que integra gestión y comunicación escolar.
                    </p>
                </motion.section>

                <motion.section
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >    
                    <p className="md:mb-5 mb-10 text-zinc-800 font-semibold md:text-left text-center">
                        100% personalizada para tu institución educativa.
                    </p>
                </motion.section>

                <motion.section
                    initial={{ y: -120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                >        
                    <button onClick={() => scrollToSection('contact')} className="bg-amber-300/30 px-5 py-2 rounded-full cursor-pointer border border-amber-300/30 hover:border-amber-300 hover:scale-105 transition-all duration-300 text-zinc-700">
                        Comenzar ahora
                    </button>
                </motion.section>
            </div>

            <div className="flex md:flex-row flex-col md:items-center md:mt-10 mt-5 gap-5 mx-auto md:w-[80%] w-[90%]">
                <div className="md:w-1/4">
                    <h2 className={`mb-2 md:text-5xl text-4xl font-extralight text-zinc-900`}>
                        El problema
                    </h2>
                    <p className="mb-7 text-zinc-500">Nosotros te mostramos la solución.</p>
                </div>
                <p className="md:w-3/4 md:text-center text-zinc-500">
                    En el contexto educativo actual, las instituciones requieren plataformas digitales que integren comunicación, organización y presentación institucional en un solo sitio web. Esta propuesta plantea el desarrollo de una plataforma web versátil, adaptable a distintas instituciones educativas (nivel inicial, primario y secundario), combinando funcionalidades de gestión académica y un sitio corporativo.
                </p>
            </div>
        </section>
    )
}
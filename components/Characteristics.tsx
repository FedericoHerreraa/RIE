'use client'

import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import reportesSeguimiento from '@/public/reportes-seguimiento.png'
import cargaDescargaArchivos from '@/public/carga-des-archivos.png'
import webInstitucional from '@/public/web-institucional.png'
import blogImg from '@/public/blog.png'
import authImg from '@/public/auth.png'
import Image from "next/image";
import { scrollToSection } from "@/utils/functions";

export const Characteristics = () => {
    return (
        <section id="proposal" className="py-20 text-center min-h-[100vh] bg-zinc-100">
            <div className="mb-40">
                <h1 className="md:text-5xl text-4xl font-extralight mb-5 text-zinc-700">Organización, gestión y control en un solo lugar</h1>
                <p className="text-zinc-500 md:text-lg mx-10">Tu institución será completamente distinta con <span className="font-bold bg-gradient-to-r text-transparent bg-clip-text from-pink-400 to-violet-400">RIE</span></p>
            </div>

            <section>
                {info.map((item, index) => (
                    <motion.section
                        key={index}
                        initial={{ y: -60, opacity: 0 }} 
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className={`flex ${index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'} gap-10 md:mb-40 mb-24 items-center justify-around mt-10 md:w-[80%] w-[90%] mx-auto`}>
                            <div className={`md:w-1/3 ${index % 2 === 0 ? 'md:text-start' : 'md:text-end'}`}>
                                <p className="italic text-zinc-400">{item.previewTitle}</p>
                                <h2 className="text-3xl font-extralight mb-5 text-zinc-700">{item.title}</h2>
                                <p className="text-zinc-500">{item.description}</p>
                                <div onClick={() => scrollToSection('contact')} className={`mt-7 flex items-center md:justify-start justify-center ${index % 2 !== 0 && 'md:flex-row-reverse'} gap-2 cursor-pointer text-zinc-700 font-semibold`}>
                                    <p className={`transition-all duration-200 ${index % 2 === 0 ? 'hover:mr-3' : 'hover:ml-3'}`}>Más información</p>
                                    <FaArrowRightLong className={`${index % 2 !== 0 && 'md:rotate-180'}`} />
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <Image
                                    src={item.img}
                                    alt="Imagen de la plataforma"
                                    className="rounded-md shadow-lg"
                                    width={800}
                                    height={500}
                                />
                            </div>
                        </div>
                    </motion.section>
                ))}
            </section>
        </section>
    )
}


const info = [
    {
        previewTitle: 'Dashboard de Administrador',
        title: 'Reportes y Seguimiento Escolar',
        description:
            'Generación automática de informes académicos, reportes de asistencia y calificaciones. Las instituciones ahorran tiempo y ofrecen un seguimiento detallado y profesional a estudiantes y familias.',
        img: reportesSeguimiento
    },
    {
        previewTitle: 'Carga y descarga de archivos',
        title: 'Gestión de Documentación Online',
        description:
            'Digitalización del proceso de inscripción, carga de archivos y administración de documentos oficiales. Todo desde un panel organizado y accesible desde cualquier dispositivo.',
        img: cargaDescargaArchivos
    },
    {
        previewTitle: 'Canales de comunicación',
        title: 'Comunicación Interna',
        description:
            'Sistema integrado de notificaciones, foros y mensajes para mantener una comunicación fluida entre la institución, las familias y el alumnado. Ideal para circulares digitales, anuncios urgentes o debates pedagógicos.',
        img: blogImg
    },
    {
        previewTitle: 'Pagina web',
        title: 'Sitio Web Institucional',
        description:
            'Una presencia digital profesional con información clave de la institución. Incluye páginas personalizadas, galería de fotos y videos, calendario de actividades, secciones de contacto con formularios y botón de WhatsApp, además de un área para descargar documentos importantes como inscripciones y reglamentos.',
        img: webInstitucional
    },
    {
        previewTitle: 'Autenticación y perfiles',
        title: 'Comunidad Educativa Digital',
        description:
            'Perfiles individuales para alumnos, docentes y familias que permiten una interacción personalizada dentro del sistema. Cada usuario accede con sus credenciales para consultar información relevante de forma segura.',
        img: authImg
    },
];
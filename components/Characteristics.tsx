

import { FaArrowRightLong } from "react-icons/fa6";
import imagePlatform from '@/public/platformTest.png'
import Image from "next/image";

export const Characteristics = () => {
    return (
        <section id="proposal" className="py-20 text-center min-h-[100vh] bg-zinc-100">
            <div className="mb-40">
                <h1 className="text-5xl font-extralight mb-5 text-zinc-700">Descubri nuestras funcionalidades</h1>
                <p className="text-zinc-500 text-lg">Tu institucion sera completamente distinta con <span className="font-bold bg-gradient-to-r text-transparent bg-clip-text from-pink-400 to-violet-400">RIE</span></p>
            </div>

            <section>
                {info.map((item, index) => (
                    <div key={index} className={`flex ${index%2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-10 mb-40 items-center justify-around mt-10 w-[80%] mx-auto`}>
                        <div className={`w-1/2  ${index%2 === 0 ? 'text-start' : 'text-end'}`}>
                            <h2 className="text-3xl font-extralight mb-5 text-zinc-700">{item.title}</h2>
                            <p className="text-zinc-500">{item.description}</p>
                            <div className={`mt-7 flex items-center ${index%2 !== 0 && 'flex-row-reverse justify-start'} gap-2 cursor-pointer text-zinc-700 font-semibold`}>
                                <p className={`transition-all duration-200 ${index%2 === 0 ? 'hover:mr-3' : 'hover:ml-3'}`}>Mas informacion</p>
                                <FaArrowRightLong className={`${index%2 !== 0 && 'rotate-180'}`}/>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <Image
                                src={imagePlatform}
                                alt="Imagen de la plataforma"
                                className="rounded-lg shadow-lg"
                                width={800}
                                height={500}
                            />
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}


const info = [
    {
      title: 'Sitio Web Institucional',
      description:
        'Una presencia digital profesional con información clave de la institución. Incluye páginas personalizadas, galería de fotos y videos, calendario de actividades, secciones de contacto con formularios y botón de WhatsApp, además de un área para descargar documentos importantes como inscripciones y reglamentos.',
    },
    {
      title: 'Comunidad Educativa Digital',
      description:
        'Perfiles individuales para alumnos, docentes y familias que permiten una interacción personalizada dentro del sistema. Cada usuario accede con sus credenciales para consultar información relevante de forma segura.',
    },
    {
      title: 'Comunicación Interna',
      description:
        'Sistema integrado de notificaciones, foros y mensajes para mantener una comunicación fluida entre la institución, las familias y el alumnado. Ideal para circulares digitales, anuncios urgentes o debates pedagógicos.',
    },
    {
      title: 'Gestión de Documentación Online',
      description:
        'Digitalización del proceso de inscripción, carga de archivos y administración de documentos oficiales. Todo desde un panel organizado y accesible desde cualquier dispositivo.',
    },
    {
      title: 'Reportes y Seguimiento Escolar',
      description:
        'Generación automática de informes académicos, reportes de asistencia y calificaciones. Las instituciones ahorran tiempo y ofrecen un seguimiento detallado y profesional a estudiantes y familias.',
    }
];
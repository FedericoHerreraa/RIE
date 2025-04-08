

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CiCircleCheck } from "react-icons/ci";

export const Plans = () => {
    return (
        <div
            id="plans"
            className="bg-[url('/bg-plans.png')] bg-cover mt-20 w-screen h-[80vh]"
        >
            <div className="w-[80%] mx-auto">
                <h1 className="font-extralight text-5xl">Nuestros Planes</h1>

                <section className="mt-10 w-full mx-auto">
                    <Tabs defaultValue="advanced" className="w-full md:w-2/3">
                        <TabsList className="rounded-lg">
                            <TabsTrigger value="base">Plan Base</TabsTrigger>
                            <TabsTrigger value="advanced">Plan Avanzado</TabsTrigger>
                        </TabsList>

                        <TabsContent value="base">
                            <div className="shadow-lg p-10 rounded-lg bg-white">
                                <h2 className="text-3xl font-light mb-2 text-zinc-700">Plan <span className="font-semibold">Base</span></h2>
                                <p className="text-zinc-600 mb-4">Ideal para colegios que solo necesitan una presencia digital profesional.</p>
                                <div className="space-y-2 text-zinc-600">
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Página web con información de la institución</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Galería de imágenes y videos</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Calendario de eventos y actividades</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Contacto con formulario y WhatsApp</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Descarga de documentos (inscripciones, reglamentos, etc.)</p>
                                    </div>
                                </div>
                                <p className="text-zinc-800 font-medium mt-6">$150.000/mes – $1.500.000/año</p>
                                <p className="mt-4 font-semibold">🚀 Pago anual con descuento</p>
                            </div>
                        </TabsContent>

                        <TabsContent value="advanced">
                            <div className="shadow-lg p-10 rounded-lg bg-white">
                                <h2 className="text-3xl font-light mb-2 text-zinc-700">Plan <span className="bg-gradient-to-r text-transparent bg-clip-text from-pink-400 via-blue-300 to-violet-400 font-semibold">Avanzado</span></h2>
                                <p className="text-zinc-600 mb-4">Para instituciones que quieren digitalizar procesos administrativos y mejorar la comunicación.</p>
                                <div className="space-y-2 text-zinc-600">
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Todo lo del Plan Base +</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Perfiles para alumnos, docentes y familias</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Sistema de comunicación interna (notificaciones y blog)</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Generación de reportes (asistencia y calificaciones)</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiCircleCheck size={20} className="text-green-500"/>
                                        <p>Inscripción y gestión de documentos online</p>
                                    </div>
                                </div>
                                <p className="text-zinc-800 font-medium mt-6">$350.000/mes – $3.800.000/año</p>
                                <p className="mt-4 font-semibold">🚀 Pago mensual con opción de congelar precio por 12 meses</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>

                <div className="mt-10">
                    <button className="bg-amber-300/50 border border-amber-500/50 cursor-pointer text-zinc-700 text-xl py-2 px-4 rounded-full hover:bg-amber-500/50 hover:scale-105 transition duration-300">
                        Quiero mi plan
                    </button>
                </div>
            </div>
        </div>
    )
}
'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CiCircleCheck } from "react-icons/ci";
import { scrollToSection } from "@/utils/functions";

export const Plans = () => {
    return (
        <div
            id="plans"
            className="bg-[url('/bg-plans.png')] bg-cover mt-20 w-screen min-h-[80vh]"
        >
            <div className="md:w-[80%] w-[90%] mx-auto">
                <h1 className="font-extralight md:text-5xl text-4xl">Nuestros Planes</h1>

                <section className="mt-10 w-full mx-auto">
                    <Tabs defaultValue="advanced" className="w-full md:w-2/3">
                        <TabsList className="rounded-lg">
                            <TabsTrigger value="base">Plan Base</TabsTrigger>
                            <TabsTrigger value="advanced">Plan Avanzado</TabsTrigger>
                        </TabsList>

                        {plans.map(plan => (
                            <TabsContent key={plan.id} value={plan.value}>
                                <div className="shadow-lg p-10 rounded-lg bg-white">
                                    <h2 className='text-3xl font-light mb-2 text-zinc-700'>Plan <span className={`font-semibold ${plan.textColor}`}>{plan.name}</span></h2>
                                    <p className="text-zinc-600 mb-4">{plan.description}</p>
                                    <div className="space-y-2 text-zinc-600">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CiCircleCheck className="text-green-500 min-w-[20px] min-h-[20px]" />
                                                <p className={`text-base ${plan.value === 'advanced' && index === 0 ? 'font-bold' : ''}`}>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-10">
                                        <div className="mt-6">
                                            <p className="text-zinc-800 font-medium">{plan.discountMonthlyPrice}</p>
                                            <p className="text-zinc-500 text-xs line-through">${plan.monthlyPrice.toLocaleString("es-AR")}/mes</p>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-zinc-800 font-medium">${plan.discountYearlyPrice.toLocaleString("es-AR")}/año</p>
                                            <p className="text-zinc-500 text-xs line-through">${plan.yearlyPrice.toLocaleString("es-AR")}/año</p>
                                        </div>                                        
                                    </div>

                                    <p className="mt-3 font-extralight bg-gradient-to-r bg-clip-text text-transparent from-violet-500 to-red-500">Gratis por el primer mes</p>
                                    <p className="mt-3 font-semibold">{plan.footer}</p>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </section>

                <div className="mt-10">
                    <button onClick={() => scrollToSection('contact')} className="bg-amber-300/30 px-5 py-2 rounded-full cursor-pointer border border-amber-300/30 hover:border-amber-300 hover:scale-105 transition-all duration-300 text-zinc-700">
                        Quiero mi plan
                    </button>
                </div>
            </div>
        </div>
    )
}


const plans = [
    {
        id: 1,
        value: 'base',
        name: 'Base',
        description: 'Ideal para colegios que solo necesitan una presencia digital profesional.',
        discountMonthlyPrice: 'GRATIS',
        monthlyPrice: 150000,
        discountYearlyPrice: 1450000,
        yearlyPrice: 1600000,
        features: [
            'Página web con información de la institución',
            'Galería de imágenes y videos',
            'Calendario de eventos y actividades',
            'Contacto con formulario y WhatsApp',
            'Descarga de documentos (inscripciones, reglamentos, etc.)',
            'Panel de control para gestionar la web',
            'Disponibilidad para modificaciónes en la plataforma',
            'Hosting y dominio incluido',
            'Mantenimiento web incluido',
        ],
        textColor: '',
        footer: '🚀 Pago anual con descuento del 10%'
    },
    {
        id: 2,
        value: 'advanced',
        name: 'Avanzado',
        description: 'Para instituciones que quieren digitalizar procesos administrativos y mejorar la comunicación.',
        discountMonthlyPrice: 'GRATIS',
        monthlyPrice: 350000,
        discountYearlyPrice: 3600000,
        yearlyPrice: 3750000,
        features: [
            'Todo el plan base +',
            'Perfiles para alumnos, docentes y familias',
            'Sistema de comunicación interna (notificaciones y blog)',
            'Generación de reportes (asistencia y calificaciones)',
            'Inscripción y gestión de documentos online'
        ],
        textColor: 'bg-gradient-to-r text-transparent bg-clip-text from-pink-400 via-blue-300 to-violet-400',
        footer: '🚀 Pago anual con descuento del 10%'
    }
]
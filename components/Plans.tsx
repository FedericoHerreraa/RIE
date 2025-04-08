import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Plans = () => {
    return (
        <div id="plans" className="mt-20 w-[80%] mx-auto min-h-[100vh]">
            <h1 className="font-extralight text-5xl">Nuestros Planes</h1>

            <section className="mt-10 w-full mx-auto">
                <Tabs defaultValue="advanced" className="w-full md:w-2/3">
                    <TabsList className="rounded-lg">
                        <TabsTrigger value="basic">Plan Básico</TabsTrigger>
                        <TabsTrigger value="advanced">Plan Avanzado</TabsTrigger>
                    </TabsList>

                    <TabsContent value="basic">
                        <div className="shadow-lg p-10 rounded-lg bg-white">
                            <h2 className="text-3xl font-light mb-2 text-zinc-700">Plan Básico (Web Institucional)</h2>
                            <p className="text-zinc-600 mb-4">Ideal para colegios que solo necesitan una presencia digital profesional.</p>
                            <ul className="list-disc list-inside space-y-2 text-zinc-600">
                                <li>✅ Página web con información de la institución</li>
                                <li>✅ Galería de imágenes y videos</li>
                                <li>✅ Calendario de eventos y actividades</li>
                                <li>✅ Contacto con formulario y WhatsApp</li>
                                <li>✅ Descarga de documentos (inscripciones, reglamentos, etc.)</li>
                            </ul>
                            <p className="text-zinc-800 font-medium mt-6">💰 $150.000/mes – $1.500.000/año</p>
                            <p className="mt-4 text-green-600 font-semibold">🚀 Pago anual con descuento</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="advanced">
                        <div className="shadow-lg p-10 rounded-lg bg-white">
                            <h2 className="text-3xl font-light mb-2 text-zinc-700">Plan Avanzado (Gestión Escolar)</h2>
                            <p className="text-zinc-600 mb-4">Para instituciones que quieren digitalizar procesos administrativos y mejorar la comunicación.</p>
                            <ul className="list-disc list-inside space-y-2 text-zinc-600">
                                <li>✅ Todo lo del Plan Básico</li>
                                <li>✅ Perfiles para alumnos, docentes y familias</li>
                                <li>✅ Sistema de comunicación interna (notificaciones y foros)</li>
                                <li>✅ Generación de reportes (asistencia, calificaciones, etc.)</li>
                                <li>✅ Inscripción y gestión de documentos online</li>
                            </ul>
                            <p className="text-zinc-800 font-medium mt-6">💰 $350.000/mes – $3.800.000/año</p>
                            <p className="mt-4 text-green-600 font-semibold">🚀 Pago mensual con opción de congelar precio por 12 meses</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    )
}
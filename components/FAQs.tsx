
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQs = () => {
    return (
        <div className="min-h-[60vh] md:my-20 my-10">
            <h1 className="text-center font-extralight md:text-5xl text-4xl my-20">Preguntas <span className="bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-orange-400 font-normal">Frecuentes</span></h1>

            <section className="md:w-[40%] w-[90%] mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>¿Qué incluye el plan básico?</AccordionTrigger>
                        <AccordionContent>
                            El plan básico incluye una página institucional con información de la escuela, galería de imágenes y videos, calendario de eventos, formulario de contacto con WhatsApp y descarga de documentos importantes.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>¿Puedo cambiar de plan más adelante?</AccordionTrigger>
                        <AccordionContent>
                            Sí, podés comenzar con el plan básico y migrar al plan intermedio en cualquier momento sin perder tu información.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>¿El sistema permite registrar usuarios como alumnos o docentes?</AccordionTrigger>
                        <AccordionContent>
                            Sí, el plan avanzado permite crear perfiles individuales para alumnos, docentes y familias con acceso personalizado.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>¿Puedo gestionar inscripciones y documentos desde la web?</AccordionTrigger>
                        <AccordionContent>
                            Claro. Desde el plan intermedio se habilita la carga y gestión online de documentos, así como el proceso de inscripción totalmente digital.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>¿Puedo agregar alguna funcionalidad que no este en los planes?</AccordionTrigger>
                        <AccordionContent>
                            Sí, se coordina una llamada para analizar la necesidad y se evalúa la posibilidad de agregarla al sistema.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    )
}


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQs = () => {
    return (
        <div className="min-h-[60vh] md:my-20 my-10">
            <h1 className="text-center font-extralight md:text-5xl text-4xl my-20">
                Preguntas <span className="bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-orange-400 font-normal">Frecuentes</span>
            </h1>

            <section className="md:w-[40%] w-[90%] mx-auto">
                <Accordion type="single" collapsible>
                    {faqsContent.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>
    )
}


const faqsContent = [
    {
        question: "¿Qué incluye el plan básico?",
        answer: "El plan básico incluye una página institucional con información de la empresa, galería de imágenes y videos, calendario de eventos, formulario de contacto con WhatsApp y descarga de documentos importantes.",
    },
    {
        question: "¿Puedo cambiar de plan más adelante?",
        answer: "Sí, podés comenzar con el plan básico y migrar al plan intermedio en cualquier momento sin perder tu información.",
    },
    {
        question: "¿El sistema permite registrar usuarios como alumnos o docentes?",
        answer: "Sí, el plan avanzado permite crear perfiles individuales para alumnos, docentes y familias con acceso personalizado.",
    },
    {
        question: "¿Puedo gestionar inscripciones y documentos desde la web?",
        answer: "Claro. Desde el plan intermedio se habilita la carga y gestión online de documentos, así como el proceso de inscripción totalmente digital.",
    },
    {
        question: "¿Puedo agregar alguna funcionalidad que no esté en los planes?",
        answer: "Sí, se coordina una llamada para analizar la necesidad y se evalúa la posibilidad de agregarla al sistema.",
    },
]
"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { ImSpinner3 } from "react-icons/im"
import { toast } from "sonner"

interface FormDTO {
    nombre: string
    asunto: string
    email: string
    mensaje: string
}

export const Contact = () => {
    const [formState, setFormState] = useState<FormDTO>({
        nombre: "",
        asunto: "",
        email: "",
        mensaje: "",
    })
    const [loading, setLoading] = useState(false)

    const cleanForm = () => {
        setFormState({
            nombre: "",
            asunto: "",
            email: "",
            mensaje: "",
        })
    }

    const validateForm = () => {
        if (!formState.nombre || !formState.asunto || !formState.email || !formState.mensaje) {
            toast("Por favor, completá todos los campos.")
            return false
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(formState.email)) {
            toast("Por favor, ingresá un correo electrónico válido.")
            return false
        }

        return true
    }

    const onSubmit = async (email: boolean) => {
        const res = validateForm()
        if (!res) {
            return
        }

        if (email) {
            setLoading(true)
            const response = await fetch('/api/send-contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            const result = await response.json()
            if (response.ok) {
                setLoading(false)
                toast('E-mail enviado correctamente.')
            } else {
                setLoading(false)
                console.error('Error: ' + result.message)
            }
            cleanForm()
        } else {
            const numero = "+5491162964493"
            const texto = `¡Hola! Soy ${formState.nombre}.\n\nDirección de correo: ${formState.email}\n${formState.mensaje}`
            window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank")
            cleanForm()
        }
    }

    return (
        <div id="contact" className="h-fit w-full my-20 bg-zinc-100 py-20">
            <h1 className="text-center font-extralight md:text-5xl text-4xl">Contáctanos ahora</h1>

            <section className="md:w-[30%] w-[85%] mx-auto mt-16">
                <form className="flex flex-col gap-5">
                    <div>
                        <Input
                            placeholder="Nombre completo"
                            className="border-zinc-400"
                            value={formState.nombre}
                            onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder="Asunto"
                            className="border-zinc-400"
                            value={formState.asunto}
                            onChange={(e) => setFormState({ ...formState, asunto: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder="Correo electrónico"
                            className="border-zinc-400"
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <Textarea
                            placeholder="Mensaje..."
                            className="border-zinc-400"
                            value={formState.mensaje}
                            onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                        />
                    </div>

                    <p className="text-center mt-5 text-zinc-500">
                        Una vez confirmado, nuestro equipo te contactará por el medio elegido.
                    </p>

                    <div className="flex items-center gap-7 justify-center md:mt-10 mt-7">
                        <button
                            type="button"
                            onClick={() => onSubmit(false)}
                            className="border-2 border-green-500 px-4 py-1 rounded-full cursor-pointer hover:bg-green-100 transition-all duration-200"
                        >
                            WhatsApp
                        </button>

                        <button
                            type="button"
                            onClick={() => onSubmit(true)}
                            className="bg-gradient-to-r from-red-500 to-orange-500 w-[150px] flex justify-center border-2 border-red-500 text-white px-4 py-1 cursor-pointer rounded-full hover:scale-105 transition-all duration-200"
                        >
                            {loading ? <ImSpinner3 size={20} className="animate-spin" /> : 'Enviar por mail'}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}



import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); 

function generateMessage(
    name: string,
    subject: string,
    email: string,
    message: string,
    isClient: boolean,
) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    background-color: #f5f5f5;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .header {
                    background: #f1f1f1;
                    color: #666666;
                    padding: 20px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: bold;
                }
                .content {
                    padding: 20px;
                    color: #333333;
                }
                .content p {
                    margin: 10px 0;
                }
                .footer {
                    background: #f1f1f1;
                    color: #666666;
                    text-align: center;
                    padding: 15px;
                    font-size: 12px;
                }
                .highlight {
                    font-weight: bold;
                    color: #007bff;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>${subject}</h1>
                </div>
                <div class="content">
                    <p>${isClient
                        ? 'Nuestro equipo te respondera a la brevedad.'
                        : 'Tienes una nueva consulta de RIE.'}
                    </p>
                    <p><span class="highlight">Nombre:</span> ${name}</p>
                    <p><span class="highlight">Email:</span> ${email}</p>
                    <p><span class="highlight">Mensaje:</span> ${message}</p>
                </div>
                <div class="footer">
                    <p>Este es un mensaje automático. Por favor, no responda.</p>
                </div>
            </div>
        </body>
        </html>
    `;
}


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { nombre, email, asunto, mensaje } = body

        if (!nombre || !email || !asunto || !mensaje) {
            return NextResponse.json({
                message: "Faltan parámetros requeridos",
                status: 400
            });
        }

        const emailClientMessage = generateMessage(
            nombre,
            email,
            asunto,
            mensaje, 
            true
        )

        const emailUsMessage = generateMessage(
            nombre, 
            email,
            asunto,
            mensaje, 
            false
        )

        // Email sent to client
        await resend.emails.send({
            from: 'contactorie@asneedsolutions.com',
            to: email,
            subject: 'Consulta a RIE',
            html: emailClientMessage
        })

        // Email sent to us
        await resend.emails.send({
            from: 'contactorie@asneedsolutions.com',
            to: 'asneedsolutions@gmail.com',
            subject: 'Nueva consulta de RIE',
            html: emailUsMessage
        })

        return NextResponse.json({ message: "Correo enviado exitosamente", status: 200 })
    } catch (error) {
        console.log("error ", error)
        return NextResponse.json({ message: "Error al enviar el correo", status: 500 })
    }
}
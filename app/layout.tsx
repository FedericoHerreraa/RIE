import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "RIE | Red Integral Educativa",
  description: "Transformá tu institución educativa con RIE: una plataforma integral con páginas web personalizadas, gestión de inscripciones, comunicación con familias y más.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/institution_icon_144269.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9pbnN0aXR1dGlvbl9pY29uXzE0NDI2OS53ZWJwIiwiaWF0IjoxNzQ0NDAxNDMxLCJleHAiOjE5MDIwODE0MzF9.jc3_2CuavbIXUCDxZLwO3ZshlMDhZ-iETT8Jkv7RFVE" />
      </head>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

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
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "RIE Landing page",
  description: "RIE Landing page",
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

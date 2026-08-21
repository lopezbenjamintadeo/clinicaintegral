import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Clínica Integral | Gestión clínica",description:"Gestión moderna de pacientes, historias clínicas y profesionales.",other:{"codex-preview":"development"},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}

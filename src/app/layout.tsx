import ReactQueryProvider from "@/components/utils/ReactQueryProvider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../components/utils/myGlobalStyle.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skedol - Bem vindo",
  description: "Controle suas dívidas",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}

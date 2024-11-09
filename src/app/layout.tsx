import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/utils/myGlobalStyle.css";

export const metadata: Metadata = {
  title: "Skedol Home",
  description: "Controle suas dívidas",
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

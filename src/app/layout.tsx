import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CSSProperties } from "react";
//import 'rsuite/dist/rsuite.min.css';
import "./globals.css";
import PageMenu from "./components/PageMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skedol Home",
  description: "Controle suas dívidas",
};

const style = {
  main: {
    backgroundColor: "#F5F5F5",
    display: "flex",
    height: "100%",
  } as CSSProperties,
  container: {
    width: "calc(100% - 42px)",
    marginLeft: "42px",
    height: "100%",
  } as CSSProperties,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <PageMenu />
        <div style={style.container}>{children}</div>
      </body>
    </html>
  );
}

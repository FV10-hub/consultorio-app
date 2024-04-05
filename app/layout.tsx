import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conusltorio Medico APP",
  description: "Una aplicacion para seguimiento de pacientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="md:flex">
          <Sidebar />
          <main className="md:flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/common/Providers";
import { NavbarComp } from "@/components/common/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/common/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarComp />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}

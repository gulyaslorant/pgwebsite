/** @format */

import localFont from "next/font/local";
import "./globals.css";

//Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const didot = localFont({
  src: "./fonts/Didot.woff",
  variable: "--font-didot",
  weight: "100 900",
});

export const metadata = {
  title: "Photogulasch",
  description: "People & Naturfotograf Lorant Gulyas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${didot.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const afacad = localFont({
  src: "../fonts/Afacad/Afacad-VariableFont_wght.ttf",
  variable: "--font-afacad",
});

const rethink_sans = localFont({
  src: "../fonts/Rethink_Sans/RethinkSans-VariableFont_wght.ttf",
  variable: "--font-rethink-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster richColors position="bottom-right" />
      <body className={afacad.variable + " " + rethink_sans.variable}>
        {children}
      </body>
    </html>
  );
}

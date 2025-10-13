import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const chulaBoldFont = localFont({
  src: "../public/font/CHULALONGKORNBold.otf",
  variable: "--font-chula-bold",
  weight: "700",
});
const chulaRegularFont = localFont({
  src: "../public/font/CHULALONGKORNReg.otf",
  variable: "--font-chula-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Quick Project",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chulaRegularFont.variable} ${chulaBoldFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

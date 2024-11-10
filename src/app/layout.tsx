import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Red_Hat_Display } from 'next/font/google'
import "./globals.css";

// const geistSans = localFont({
//    src: "./fonts/GeistVF.woff",
//    variable: "--font-geist-sans",
//    weight: "100 900",
// });
// const geistMono = localFont({
//    src: "./fonts/GeistMonoVF.woff",
//    variable: "--font-geist-mono",
//    weight: "100 900",
// });
const redHatDisplay = Red_Hat_Display({
   variable: '--red-hat-display',
   subsets: ['latin'],
   display: 'swap',
   weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
   title: "Sunset",
   description: "Sunset is a simple blog website",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={` ${redHatDisplay.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}

"use client";

import { Racing_Sans_One, Roboto } from 'next/font/google';
import "./globals.css";
import Nav from "./components/Nav"
import Footer from "./components/Footer";
const racing = Racing_Sans_One({ subsets: ['latin'], variable: '--font-racing-sans-one', weight: ['400'] });
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['100','300','400', '500', '700', '900'] });


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${racing.variable} ${roboto.variable}`}>
        <Nav/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}


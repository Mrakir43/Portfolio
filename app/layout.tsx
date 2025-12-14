import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aamir Khan | Freelance Web & Mobile Developer",
    description: "Passionate freelancer specializing in creating modern, user-friendly websites and applications. Expert in React, Next.js, Android development with Kotlin & Jetpack Compose.",
    keywords: ["Aamir Khan", "Web Developer", "Mobile Developer", "Freelance", "React", "Next.js", "Android", "Kotlin", "Portfolio"],
    authors: [{ name: "Aamir Khan" }],
    openGraph: {
        title: "Aamir Khan | Freelance Web & Mobile Developer",
        description: "Passionate freelancer specializing in modern web and mobile development.",
        type: "website",
        url: "https://mrakir43.vercel.app",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}

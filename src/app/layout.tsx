import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "DAIICT Portal",
    description: "Student Body Government Portal",
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-big-calendar@0.38.0/lib/css/react-big-calendar.css" />
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="h-screen bg-background">
                        <Navbar />
                        <main className="overflow-y-auto">{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
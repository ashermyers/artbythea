import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Art by Thea - Original Paintings & Portraits by Thea Barbato",
  description:
    "Discover beautiful original paintings by artist Thea Barbato. Specializing in portraits, abstracts, and landscapes. Turning life into art with passion and creativity.",
  keywords:
    "art, paintings, portraits, abstract art, landscapes, original artwork, Thea Barbato, artist, fine art, custom portraits",
  authors: [{ name: "Thea Barbato" }],
  creator: "Thea Barbato",
  publisher: "Art by Thea",
  openGraph: {
    title: "Art by Thea - Original Paintings & Portraits",
    description:
      "Discover beautiful original paintings by artist Thea Barbato. Specializing in portraits, abstracts, and landscapes.",
    url: "https://artbythea.com",
    siteName: "Art by Thea",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Art by Thea - Original Paintings",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art by Thea - Original Paintings & Portraits",
    description: "Discover beautiful original paintings by artist Thea Barbato.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="canonical" href="https://artbythea.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

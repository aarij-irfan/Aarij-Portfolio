import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Aarij Irfan | Full-Stack Software Engineer & Digital Strategist",
  description:
    "Portfolio of Aarij Irfan, a self-driven full-stack developer and founder of Gen-T AI Solutions. Specializing in React, Next.js, Node.js, and AI integration.",
  keywords: [
    "Aarij Irfan",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI Integration",
    "Digital Strategist",
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Gen-T AI Solutions",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Aarij Irfan" }],
  creator: "Aarij Irfan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aarij-irfan.vercel.app",
    title: "Aarij Irfan | Full-Stack Software Engineer & Digital Strategist",
    description: "Portfolio of Aarij Irfan, a self-driven full-stack developer and founder of Gen-T AI Solutions.",
    siteName: "Aarij Irfan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aarij Irfan - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarij Irfan | Full-Stack Software Engineer",
    description: "Portfolio of Aarij Irfan, a self-driven full-stack developer and founder of Gen-T AI Solutions.",
    images: ["/og-image.jpg"],
    creator: "@aarij_irfan",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://aarij-irfan.vercel.app"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="canonical" href="https://aarij-irfan.vercel.app" />
      </head>
      <body className={`${outfit.variable} font-sans bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aarij Irfan",
              url: "https://aarij-irfan.vercel.app",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Gen-T AI Solutions",
              },
              sameAs: ["https://github.com/aarij-irfan", "https://www.linkedin.com/in/aarij-irfan"],
              description: "Full-Stack Software Engineer & Digital Strategist",
              knowsAbout: [
                "Frontend Development",
                "Backend Development",
                "React",
                "Next.js",
                "Node.js",
                "AI Integration",
                "Mobile Development",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

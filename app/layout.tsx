import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omkar Karale | Full Stack Developer & Creative Technologist",
  description:
    "Portfolio of Omkar Karale — Full Stack Developer building immersive digital experiences with modern web technologies, AI-powered solutions, and interactive applications.",
  keywords: [
    "Omkar Karale",
    "Full Stack Developer",
    "React",
    "Flutter",
    "JavaScript",
    "Python",
    "Portfolio",
    "Creative Technologist",
  ],
  authors: [{ name: "Omkar Karale" }],
  openGraph: {
    title: "Omkar Karale | Full Stack Developer",
    description:
      "Building immersive digital experiences with modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar Karale | Full Stack Developer",
    description:
      "Building immersive digital experiences with modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Computerized drivers testing and training platform - CDTT",
  description: "The official Computerized drivers testing and training platform of Nigeria",
  icons: {
    icon: {
      url: "/cdtlogo2.png",
      type: "image/png",
    },
    shortcut: "/cdtlogo2.png",
    apple: "/cdtlogo2.png",
  },
  openGraph: {
    title: "Computerized drivers testing and training platform - CDTT",
    description: "The official Computerized drivers testing and training platform of Nigeria",
    image: {
      url: "/cdtlogo2.png",
      width: 1200,
      height: 630,
      alt: "CDTT Platform Logo",
    },
    type: "website",
    url: "https://cdttest.com.ng",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

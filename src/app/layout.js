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
    icon: "/cdtlogo2.png",
    shortcut: "/cdtlogo2.png",
    apple: "/cdtlogo2.png",
  },
  openGraph: {
    title: "Computerized drivers testing and training platform - CDTT",
    description: "The official Computerized drivers testing and training platform of Nigeria",
    image: "/cdtlogo2.png",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

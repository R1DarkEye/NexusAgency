import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusAgency | We Build Websites That Drive Growth",
  description: "Nexus Agency builds fast, scalable and high-performing websites that help brands stand out and grow online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
    >
      <body>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}

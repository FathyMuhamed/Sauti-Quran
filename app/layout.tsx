import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ViewTransitions, Link } from "next-view-transitions";
import { SearchBar } from "@/components/SearchBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sauti Quran",
  description: "Sauti Quran is a web app that listens to the Quran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-white">
                    <Link
                      href="/"
                      className="hover:text-gray-300 transition"
                      scroll={false}
                    >
                      Sauti Quran
                    </Link>
                  </h1>
                  <SearchBar />
                </div>
              </div>
            </nav>
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/shared/Nav";
import NavbarProvider from "@/components/provider/NavbarProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Real Bot",
  description: "Unfiltered Chatbot App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
      <NavbarProvider>
        {children}
        <footer className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} REALBOT. All rights reserved.
          </p>
        </div>
      </footer>
      </NavbarProvider>
      </body>
    </html>
  );
}

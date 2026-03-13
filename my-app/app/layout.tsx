
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PWAInstallPrompt from "@/components/PWA/PWAInstallPrompt";
import { AuthProvider } from "@/context/AuthContext";
import RegisterSW from "@/components/PWA/RegisterSW";
import NetworkStatusProvider  from "../components/PWA/NetworkStatusProvider";
import { CartProvider } from "@/context/CartContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  manifest: "/manifest.json",
  title: "Anandwan",
  description: "Anandwan Ecommerce Platform"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
        <RegisterSW />
        {/* <OfflinePopup isOnline={isOnline} /> */}
         <NetworkStatusProvider/>
        <Navbar />
        {children}
        <Footer/>
          <PWAInstallPrompt />
          </CartProvider>
        </AuthProvider>

      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

import RegisterSW from "@/components/RegisterSW";
// import OfflinePopup from "@/components/OfflinePopup";
// import useNetworkStatus from "@/hooks/useNetworkStatus";
import NetworkStatusProvider from "@/components/NetworkStatusProvider";
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
        <RegisterSW />
        {/* <OfflinePopup isOnline={isOnline} /> */}
         <NetworkStatusProvider/>
        <Navbar />
        {children}
        <Footer/>
          <PWAInstallPrompt />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PocketProvider } from "@/context/pocketContext";
import { WalletProvider } from "@/context/walletContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MintableLite",
  description: "A simple NFT marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PocketProvider>
        <WalletProvider>
          <body className={inter.className}>{children}</body>
        </WalletProvider>
      </PocketProvider>
    </html>
  );
}

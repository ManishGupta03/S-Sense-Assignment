import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SocialSense Next App",
  description: "Try to Implement something robust using NextJS",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="flex justify-evenly m-auto p-2 bg-[#e0dfdf] border fixed w-full z-10">
        <button className="text-lg font-semibold w-[2x0vw] "><Link href="/theme" className="hover:text-gray-700 ">Theme Page</Link></button>
        <button className="text-lg font-semibold"><Link href="/dashboard" className="hover:text-gray-700 " >Dashboard</Link></button>
        <button className="text-lg font-semibold"><Link href="/portfolio" className="hover:text-gray-700 " >Profile</Link></button>
        </div>
        {children}
        </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Simple Next.js Site",
  description: "A minimal Next.js website with 5 pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="py-7 px-20] container">
          <div className="flex justify-between items-center">
            <div className="text-white text-[36px] font-bold leading-[47px] font-['DM_Sans']">
              <Link href="/">Azizbek</Link>
            </div>

            <nav>
              <ul className="flex">
                <li className="ml-6 text-[22px] font-semibold font-['Roboto'] text-[#535353] hover:text-white duration-500">
                  <Link href="/">Home</Link>
                </li>
                <li className="ml-6 text-[25px] font-semibold font-['Roboto'] text-[#535353] hover:text-white duration-500">
                  <Link href="/services">Services</Link>
                </li>
                <li className="ml-6 text-[25px] font-semibold font-['Roboto'] text-[#535353] hover:text-white duration-500">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

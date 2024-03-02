import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Credits() {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center p-4 shadow-md text-4xl">
      <Link href="/"><h1>Magic Anvil</h1></Link>
        <div className="flex gap-16 text-2xl">
          <Link href="/member">Team Members</Link>
          <Link href="/credit">Credits</Link>
          <Link href="/download">Downloads</Link>
          <Link href="/prototype">Prototypes</Link>
        </div>
      </nav>
      <h1>Credits</h1>
      <p>This is the credits page.</p>
    </div>
  );
}
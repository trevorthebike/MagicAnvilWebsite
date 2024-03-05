import React from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Download() {
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

      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-8">Downloads</h1>
        <p className="text-xl mb-8">This is the downloads page.</p>
        {/* GitHub Link Button */}
        <a href="https://github.com/trevorthebike/MagicAnvilBuild" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visit our GitHub
        </a>
      </div>
    </div>
  );
}
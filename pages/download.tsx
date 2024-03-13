import React from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ["latin"] });

export default function Download() {
  return (
    <Layout>
      <main className={`min-h-screen flex flex-col ${inter.className}`}>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-8">Downloads</h1>
        <p className="text-xl mb-8">This is the downloads page.</p>
        {/* GitHub Link Button */}
        <a href="https://github.com/trevorthebike/MagicAnvilBuild" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visit our GitHub
        </a>
      </div>
      </main>
    </Layout>
  );
}
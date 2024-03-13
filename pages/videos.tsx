// Assuming this is in pages/index.tsx or a similar file

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Layout from '../components/Layout'; // Adjust the import path as needed

const inter = Inter({ subsets: ["latin"] });

export default function Video() {
  return (
    <Layout>
      <main className="flex-1 flex flex-col items-center justify-center p-24" >
        Videos
        {/* Your main content goes here */}
      </main>
    </Layout>
  );
}

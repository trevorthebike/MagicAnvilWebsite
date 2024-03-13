// Assuming this is in pages/index.tsx or a similar file

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Layout from '../components/Layout'; // Adjust the import path as needed

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className="flex-1 flex flex-col items-center justify-center p-80" 
      style={{ backgroundImage: "url('/forgebg.png')", backgroundSize: 'cover', 
      backgroundPosition: 'center center' }}>
        <div className="main-content">
          This is the thing
          </div>
        {/* Your main content goes here */}
      </main>
    </Layout>
  );
}

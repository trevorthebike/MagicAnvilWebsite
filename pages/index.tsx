import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // Fixed: Moved style object inside {} and corrected the property name to backgroundImage
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center p-4 shadow-md text-4xl">
        <h1>Magic Anvil</h1>
        <div className="flex gap-16 text-2xl">
          <Link href="/member">Team Members</Link>
          <Link href="/credit">Credits</Link>
          <Link href="/download">Downloads</Link>
          <Link href="/prototype">Prototypes</Link>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-24" 
      style={{ backgroundImage: "url('/forgebg.png')", backgroundSize: 'cover', 
      backgroundPosition: 'center center' }}>
        Welcome to our Site
        
        {/* Your main content goes here */}
      </main>
    </div>
  );
}
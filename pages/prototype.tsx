import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Prototype() {
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
        <h1 className="text-5xl mb-8">Prototype</h1>
        <p className="text-xl mb-8">This is the prototypes page.</p>
        <h1> Lofi Prototypes Video</h1>
        {/* Video Embeds */}
        <div className="flex flex-col items-center gap-4">
          <video controls className="mb-4" width="640" height="360">
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1> Hifi Prototypes Video</h1>
          <video controls width="640" height="360">
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

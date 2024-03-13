// pages/Prototype.tsx

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Layout from '../components/Layout'; // Adjust the path as necessary

const inter = Inter({ subsets: ["latin"] });

const Prototype = () => {
  return (
    <Layout>
      <div className={`min-h-screen flex flex-col ${inter.className}`}>
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
    </Layout>
  );
};

export default Prototype;

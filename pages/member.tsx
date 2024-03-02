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
      <h1 className="title">Our Team Members</h1>
      
      {/* Team Member: Brandon */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Brandon's Image" />
        <h3>Brandon</h3>
      </div>
      
      {/* Team Member: David */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="David's Image" />
        <h3>David</h3>
      </div>

      {/* Team Member: Abel */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Abel's Image" />
        <h3>Abel</h3>
      </div>

      {/* Team Member:  Jacob */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Jacob's Image" />
        <h3>Jacob</h3>
      </div>

      {/* Team Member:  Josey */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Josey's Image" />
        <h3>Josey</h3>
      </div>

      {/* Team Member: Ruby */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Ruby's Image" />
        <h3>Ruby</h3>
      </div>

      {/* Team Member: Alyse */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Alyse's Image" />
        <h3>Alyse</h3>
      </div>

      {/* Team Member: Trevor */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Trevor's Image" />
        <h3>Trevor</h3>
      </div>


      
      {/* Add the rest of your team members here in similar fashion */}
      
      {/* Example for one more member */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Johnny's Image" />
        <h3>Johnny</h3>
      </div>
      
      <style>
        {`
          .team-member {
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 20px;
            text-align: center;
            background: white;
            color: black;
          }
          .title{
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 20px;
            text-align: center;
          }
          img {
            width: 100px;
            height: 100px;
            background-color: #f0f0f0;
          }
          h3 {
            margin: 10px 0;
          }

        `}
      </style>
      <div className = "title">
      <Link href="/">
        Back to Home
      </Link>
    </div>
    </div>
  );
}
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Layout from '../components/Layout';

const inter = Inter({ subsets: ["latin"] });


export default function Credits() {
  return (
    <Layout>
      <main>
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      {/* Navigation Bar */}
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
        This is what Abel did!!!
      </div>

      {/* Team Member:  Jacob */}
      <div className="team-member">
        <img src="placeholder-image-url.jpg" alt="Jacob's Image" />
        <h3>Jacob</h3>
        I was the sole audio designer. I wrote the 2 background music tracks and recorded and edited all sound effects. I was also responsible for compiling and editing the prototype gameplay videos
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
    </main>
    </Layout>
  );
}
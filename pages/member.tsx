import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Layout from '../components/Layout';

const inter = Inter({ subsets: ["latin"] });


export default function Credits() {
  return (
    <Layout>
      <main>
      <h1 className="title">Our Team Members</h1>
    <div className="memberpage">
      {/* Navigation Bar */}
      
      {/* Team Member: Brandon */}
      <div className="team-member">
       
        <h3>Brandon Jacobson</h3>
        <p className ="team-member-content">
        I was a programmer for the game. I implemented the saving and loading functionality for the game. 
        I also added the localization support for multiple languages.
        </p>
        <img className="team-member-image" src="brandon.png" alt="Brandon's Image" />
      </div>
      
      {/* Team Member: David */}
      <div className="team-member">
        <h3>David Amaya</h3>
        <p className ="team-member-content">
        I was the lead designer for the game. I designed and implemented the microgames and the core gameplay loop. 
        I also led some team meetings in the beginning and did a lot of programming.
        </p>
        <img className="team-member-image" src="davidcontribution.png" alt="David's Image" />
      </div>

      {/* Team Member: Abel */}
      <div className="team-member">
        <h3>Abel Goy</h3>
        <p className ="team-member-content">I was the Producer for Sprints 2 and 3 of the project, 
        duties consisted of creating meeting agendas, keeping track of tasks, 
        and writing meeting summaries. I was also the  Pixel Artist in charge of designing/animating 
        all of the character customer sprites in the game.
        </p>
        <img className="team-member-image" src="abel.png" alt="Abel's Image" />
      </div>

      {/* Team Member:  Jacob */}
      <div className="team-member">
        <h3>Jacob Dickerman</h3>
        <p className ="team-member-content">I was the sole audio designer. 
        I wrote the 2 background music tracks and recorded and edited all sound effects. 
        I was also responsible for compiling and editing the prototype gameplay videos
        </p>
        <video className = "team-member-image" controls >
              <source src="/jacob.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      </div>

      {/* Team Member:  Josey */}
      <div className="team-member">
        <h3>Josey Verespey</h3>
        <p className ="team-member-content">
        I was the main systems programmer, the bulk of the core gameplay outside of the microgames,
         the main shop scene, systems and functionality  were implemented by me. 
         I also drew a couple small ui icons. I assembled and implemented the UI and animations in the main shop scene
        </p>
        <img className="team-member-image" src="josey.png" alt="Josey's Image" />
      </div>

      {/* Team Member: Ruby */}
      <div className="team-member">
        <h3>Ruby Tseng</h3>
        <p className ="team-member-content">
        Im the artist for the game. I designed art assets for many objects. I designed the splash scene. 
        I also translated the game from English to Chinese.
        </p>
        <div className="flex justify-center items-center">
        <img className="team-member-image" src="rubycontribution.png" alt="Ruby's Image" />
        </div>
      </div>

      {/* Team Member: Alyse */}
      <div className="team-member">
        <h3>Alyse Rose</h3>
        <p className ="team-member-content">
        I was the UI/UX designer for the game. I helped design the crafting menu, border art, timing bar, and the volume slider.
         I also created scene flows and other sketches of UI assets for the game and made sure they were user friendly and easy to follow.
        </p>
        <img className="team-member-image" src="alyse.png" alt="Alyse's Image" />
      </div>

      {/* Team Member: Trevor */}
      <div className="team-member">
        <h3>Trevor Gardner</h3>
        <p className ="team-member-content">
          I created the website and did all the hosting. In the begining, I worked on WebGL deployment and on compressing the build to a smaller size.
          Then I worked on deployment to all deskotp builds. I worked on creating the website with NextJs, hosting it on vercel, and filling out all the content on it.
          I also worked on the download link, team member contributions, and general UI. I also worked on the game itself, adding the results screen and some of the early scene logic. 
        </p>
        <img className="team-member-image" src="trevor.png" alt="Trevor's Image" />
      </div>

      
      {/* Add the rest of your team members here in similar fashion */}
      
      {/* Example for one more member */}
      <div className="team-member">
      <h1 className ="title">Outside Contributer</h1>
        <h3>Johnny Wong</h3>
        <p className ="team-member-content">
          I was an artist for the game. I created background art for our game scenes, some UI assets, and created the art for our newspaper scene.
          </p>
          <img className="team-member-image" src="johnycontribution.png" alt="Johnny's Image" />
      </div>
    </div>
    </main>
    </Layout>
  );
}
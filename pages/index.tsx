import Layout from '../components/Layout'; // Ensure the correct path to your Layout component

export default function Constraints() {
  return (
    <Layout>
      <main>
      <h1 className="title">Welcome to our Game!</h1>
        <div className="mainpage">
          <div className="team-member">
            <h3>Concept</h3>
              In Magic Anvil players step into the shoes of an aspiring blacksmith aiming to become a master craftsman. 
              Through the core gameplay loops of crafting and trading, forge equipment, and sell their creations to earn money and materials. 
              As they progress, they engage in sharpening and forging minigames, and face challenges from three distinct customers, 
              all while managing their reputation and resources to achieve greatness in the realm of blacksmithing.
            </div>
            <div className="team-member">
            <h3>Gameplay</h3>
            <p>This is our vertical slice of our game that was created at UCSC in Winter 24 CMPM171</p>
            <video className = "team-member-image" controls >
              <source src="/shortplay.mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
            <div className="team-member">
              <h3>Our Team Members</h3> 
              <ul>
                <li>Brandon Jacobson</li>
                <li>David Amaya</li>
                <li>Abel Goy</li>
                <li>Jacob Dickerman</li>
                <li>Josey Verespey</li>
                <li>Ruby Tseng</li>
                <li>Alyse Rose</li>
                <li>Trevor Gardner</li>
                <li>Johnny Wong</li>
            </ul>
            </div>
            <div className="team-member">
            <h3>Accessibility</h3>
              <p>Our game prioritizes inclusivity and accessibility, catering to players with limited vision, dexterity, audition, 
                and attention by employing simple control schemes, non-reliant sound gameplay, and 
                natural resting points. We embraced localization by supporting both Chinese and English, with in-game language toggles, culturally adapted assets, 
                integrated fonts, and comprehensive testing to ensure a seamless experience. The game is designed for offline play, maintains a size under 100 MiB for accessibility, 
                and offers cross-platform support, demonstrating our commitment to an inclusive, versatile gaming experience.
              </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

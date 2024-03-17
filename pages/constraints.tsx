import Layout from '../components/Layout'; // Ensure the correct path to your Layout component

export default function Constraints() {
  return (
    <Layout>
      <main>
        <h1 className="title">Game Design Constraints</h1>
        <div className="memberpage">
          <section className="team-member">
            <h2>Accessibility</h2>
            <p>Our game was designed to be inclusive, ensuring that players with limited abilities could complete it. Here’s how we addressed various accessibility challenges:</p>
            <ul>
              <li><strong>Limited Vision (Seeing):</strong> We used brightness and contrast adjustments over color differentiation, implemented continuous motion for interactive elements, and prioritized visual elements with animated transitions.</li>
              <li><strong>Limited Dexterity (Touching):</strong> The game can be played with one hand, utilizing simple control schemes that may include multi-button or multi-finger gestures.</li>
              <li><strong>Limited Audition (Hearing):</strong> We ensured the game is completable without sound, complementing any auditory feedback with visual or tactile feedback.</li>
              <li><strong>Limited Energy and Attention (Resting):</strong> The gameplay was designed to reach natural resting points within two minutes, allowing players to pause or rest without additional actions.</li>
            </ul>
          </section>
          <section className="team-member">
            <h2>Localization</h2>
            <p>While not explicitly detailed, our design considers various languages and cultural contexts to make the game accessible to a broader audience.</p>
          </section>
          <section className="team-member">
            <h2>Game Format</h2>
            <p>Our game supports offline play, is less than 100 MiB in size, and supports cross-platform functionality. Here’s how we addressed these requirements:</p>
            <ul>
              <li><strong>Offline Play:</strong> The game is entirely completable offline.</li>
              <li><strong>Size Limitation:</strong> We optimized file sizes and used efficient data compression techniques to keep the game under 100 MiB.</li>
              <li><strong>Cross-Platform Support:</strong> The game was designed to be easily ported between platforms without significant changes to the software components.</li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}

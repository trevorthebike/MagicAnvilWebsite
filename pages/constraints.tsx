import Layout from '../components/Layout'; // Ensure the correct path to your Layout component

export default function Constraints() {
  return (
    <Layout>
      <main>
        <h1 className="title">Game Design Constraints</h1>
        <div className="memberpage">
          <section className="team-member">
            <h3>Accessibility</h3>
            <p>Our game was designed to be inclusive, ensuring that players with limited abilities could complete it. Heres how we addressed various accessibility challenges:</p>
            <ul>
              <li><strong>Limited Vision (Seeing):</strong> We used brightness and contrast adjustments over color differentiation, implemented continuous motion for interactive elements, and prioritized visual elements with animated transitions.</li>
              <li><strong>Limited Dexterity (Touching):</strong> The game can be played with one hand, utilizing simple control schemes that may include multi-button or multi-finger gestures.</li>
              <li><strong>Limited Audition (Hearing):</strong> We ensured the game is completable without sound, complementing any auditory feedback with visual or tactile feedback.</li>
              <li><strong>Limited Energy and Attention (Resting):</strong> The gameplay was designed to reach natural resting points within two minutes, allowing players to pause or rest without additional actions.</li>
            </ul>
          </section>
          <section className="team-member">
          <section>
              <h3>Localization Efforts</h3>
              <p>To make our game accessible to a broader audience, we expanded our localization efforts to include both Chinese and English languages. This involved not only translating text but also adapting various game assets and incorporating new fonts to accommodate the distinct characteristics of each language. Heres a closer look at how we achieved this:</p>
              <ul>
                <li><strong>Language Toggle:</strong> We introduced an in-game feature allowing players to seamlessly switch between English and Chinese, enhancing user experience and accessibility.</li>
                <li><strong>Asset Adaptation:</strong> Recognizing the cultural and linguistic differences, we modified numerous assets to resonate with our target audiences. This included changes to visuals, icons, and UI elements to ensure cultural relevance and clarity.</li>
                <li><strong>Font Integration:</strong> To support the unique typographical requirements of Chinese and English, we incorporated new fonts. This ensured legibility and aesthetic appeal across both languages.</li>
                <li><strong>Comprehensive Testing:</strong> Our localization efforts were rigorously tested to ensure that language changes were accurately reflected across the game without impacting the gameplay experience.</li>
              </ul>
            </section>
          </section>
          <section className="team-member">
            <h3>Game Format</h3>
            <p>Our game supports offline play, is less than 100 MiB in size, and supports cross-platform functionality. Heres how we addressed these requirements:</p>
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

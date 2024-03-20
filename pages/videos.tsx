// Import necessary modules and components
import Layout from '../components/Layout'; // Adjust the path as necessary

const Prototype = () => {
  return (
    <Layout>
      <main>
      <h1 className="title">Gameplay Videos</h1>
    <div className="memberpage">
      <div className="team-member">
        <h3>Shortplay Video</h3>
        <video className = "team-member-image" controls >
            <source src="/shortplay.mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      <div className="team-member">
        <h3>Longplay Video</h3>
        <video className = "team-member-image" controls >
            <source src="/output.mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </main>
    </Layout>
  );Layout
};

export default Prototype;

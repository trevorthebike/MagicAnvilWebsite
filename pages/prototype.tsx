// Import necessary modules and components
import Layout from '../components/Layout'; // Adjust the path as necessary

const Prototype = () => {
  return (
    <Layout>
      <main>
      <h1 className="title">Prototypes</h1>
    <div className="memberpage">
      <div className="team-member">
        <h3>Lofi Prototype</h3>
        <video className = "team-member-image" controls >
            <source src="/video1.mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      <div className="team-member">
        <h3>Hifi Prototype</h3>
        <video className = "team-member-image" controls >
            <source src="/video2.mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </main>
    </Layout>
  );Layout
};

export default Prototype;

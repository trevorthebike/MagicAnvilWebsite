import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout'; // Adjust the path as necessary

export default function Download() {
  return (
    <Layout>
      <main>
      <h1 className="title">Downloads</h1>
        <div className="memberpage">
          <div className="team-member">
            <h3>Windows Build</h3>
            <img className="team-member-image" src="windows.jpg" width="300px" height="200px" alt="Windows Image" />
            <p>Click below for Link</p>
            {/* GitHub Link Button */}
            <a href="https://github.com/trevorthebike/MagicAnvilBuild/archive/master.zip" target="_blank" rel="noopener noreferrer" className="button">
              Windows Zip
            </a>
          </div>
          <div className="team-member">
            <h3>Mac Build</h3>
            <img className="team-member-image" src="mac.png" alt="Mac Image" />
            <p>Click below for Link</p>
            {/* GitHub Link Button */}
            <a href="https://github.com/trevorthebike/MagicAnvilMacBuild/archive/master.zip" target="_blank" rel="noopener noreferrer" className="button">
              Mac Zip
            </a>
          </div>
          <div className="team-member">
          <h3>Linux Build</h3>
          <img className="team-member-image" src="tux.png" alt="Tux Image" />
            <p>Click below for Link</p>
            {/* GitHub Link Button */}
            <a href="https://github.com/trevorthebike/MagicAnvilLinuxBuild/archive/master.zip" target="_blank" rel="noopener noreferrer" className="button">
              Linux Zip
            </a>
          </div>
          <div className="team-member">
          <h3>WebGl Build</h3>
            <p>Coming Soon</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

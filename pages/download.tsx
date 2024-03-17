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
            <p>This is the downloads page.</p>
            {/* GitHub Link Button */}
            <a href="https://github.com/trevorthebike/MagicAnvilBuild" target="_blank" rel="noopener noreferrer" className="button">
              Visit our GitHub
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

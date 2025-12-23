import React from 'react';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

function Home() {
  return (
 <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="md:col-span-2">
          <LeftSide />
        </div>

        {/* Right Side */}
        <div>
          <RightSide />
        </div>
      </main>
    </div>
  );
}
export default Home;
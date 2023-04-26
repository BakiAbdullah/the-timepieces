import React from 'react';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-[url('/banner.jpg')]">
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="flex justify-start text-left text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-6xl font-bold">
            "Elevate Your Style with Our Classic Timepieces"
          </h1>
          <p className="mb-5">Make a Statement with Our Unique Watch Designs</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
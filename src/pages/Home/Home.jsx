import React from 'react';
import man from '../../assets/man.jpg'

const Home = () => {
  return (
    <div className="hero min-h-screen bg-[url('/public/banner.jpg')]">
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="flex text-left text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="max-w-2xl">
          <img className="w-[400px] opacity-70" src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
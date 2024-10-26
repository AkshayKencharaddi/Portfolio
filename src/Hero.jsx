import React from "react";

const Hero = () => (
  <section
  className="w-full h-[80vh] flex items-center justify-center text-white" 
  style={{ backgroundImage: 'url(/aa.jpg)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
   }}
  >
    <div className="bg-black bg-opacity-0 py-8">
      <h2 className="text-6xl font-bold text-gray-1000">
        Hello, I'm Akshay Ramesh Kencharaddi
      </h2>
      <p className="text-center text-3xl text-gray-1000">
        I am a Frontend Development Enthusiast
      </p>
    </div>
  </section>
);

export default Hero;

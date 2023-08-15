import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <b>
              The <span className="text-orange-500">Best</span>
            </b>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <b>
              <span className="text-orange-500">Foods</span> Delivered
            </b>
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};
export default Hero;

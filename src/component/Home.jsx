import React, { useState } from 'react'

const Home = () => {
  
const images = [
  "https://source.unsplash.com/random/800x400?sig=1",
  "https://source.unsplash.com/random/800x400?sig=2",
  "https://source.unsplash.com/random/800x400?sig=3",
];


  const [current, setCurrent] = useState(0);
  const length = images.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <div>
      <p>jai shree ram</p>
       <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <img src={img} alt={`Slide ${index}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home

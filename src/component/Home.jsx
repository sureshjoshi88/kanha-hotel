import React, { useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { memo } from 'react';
//import images
import hotel from '../images/hotel.jpg'
import front from '../images/front-img.jpg'
import room1 from '../images/room1.jpg'



const Home = () => {
  
const images = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/169124334.jpg?k=f7c9caabf8254663949bebfc15302612f6fa37aeecc6ec0715d6648a049311ca&o=&hp=1",
  hotel,
  front,
];
const images1 = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBOklOQD4v4QChxo3sUS95NN34zI037jLgA&s",
  "https://thumbs.dreamstime.com/b/spicy-masala-mutton-fry-indian-food-steamed-rice-butter-chicken-dinner-table-restaurant-style-dinner-non-veg-thali-spicy-masala-202055314.jpg",
  "https://thumbs.dreamstime.com/b/unhealthy-fast-food-delivery-menu-featuring-assorted-burgers-cheeseburgers-nuggets-french-fries-soda-high-calorie-low-356045884.jpg",
  "https://media.istockphoto.com/id/1078081328/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=2zrBYS8skb8jdgk-8HTFqxOUd1HBSC9Mre2DUCPxyXw="
];


  const [current, setCurrent] = useState(0);
  const length = images.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  setTimeout(() => {
    nextSlide()
}, 6000);

  return (
    <div>
       <div className="relative w-full ">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <img src={img} alt={`Slide ${index}`} className="w-full h-100 object-cover" />
             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-xl md:text-5xl font-bold mb-2">Welcome To Kanha Hotel</h2>
              <p className="text-sm md:text-2xl max-w-md font-medium">
                At Kanha Hotel, we redefine the art of hospitality, offering a world-class experience tailored to your
                every need. Discover the perfect blend of luxury, comfort, and convenience that awaits you at our doorstep.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 hidden  md:block left-4 transform -translate-y-1/2 text-2xl bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        <IoIosArrowBack />

      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 hidden md:block right-4 transform -translate-y-1/2 text-2xl bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
      >
        <MdNavigateNext />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2 pb-4">
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
    <div className='grid md:grid-cols-2 gap-5 mt-5'>
      <div className='p-2'>
        <p className='font-semibold text-2xl md:pt-8 pt-2'>Serenity Unleashed</p>
        <p className='font-semibold text-lg pt-2'>Kanha's Cozy Comforts</p>
        <p className='pt-2'>Step into Kanha's Cozy Comforts and experience a haven of tranquility. Our rooms are designed with your ultimate comfort in mind, offering plush furnishings and a serene ambiance. It's more than just a stay – it's a retreat, where every detail is carefully curated for your relaxation. Come, indulge in luxury and make unforgettable memories at Kanha's.</p>
      </div>
      <div className='p-2'>
        <img className='h-100  w-full rounded ' src={room1} alt="Rooms" />
      </div>
    </div>
    <div className='grid md:grid-cols-2 gap-5 mt-5'>
     
      <div className='p-2'>
        <img className='h-100  w-full rounded ' src={room1} alt="Rooms" />
      </div>
       <div className='p-2'>
        <p className='font-semibold text-2xl md:pt-8 pt-2'>Timeless Luxury Retreat</p>
        <p className='font-semibold text-lg pt-2'>Modern Luxury, Timeless Serenity</p>
        <p className='pt-2'>Welcome to Kanha Hotel, where the essence of modern luxury meets the enduring charm of timeless serenity. Here, every detail is thoughtfully curated to offer you an experience that transcends the ordinary. Your stay with us promises not just relaxation but a journey into a world where indulgence and tranquility harmoniously coexist.</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-5 mt-5">
    <div className="relative w-full ">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        {images1.map((img, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <img src={img} alt={`Slide ${index}`} className="w-full h-100 object-cover" />
          </div>
        ))}
      </div>

      

      <div className="flex justify-center mt-4 gap-2 pb-4">
        {images1.map((_, index) => (
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
    <div className='p-2'>
      <p>Dine in Elegance</p>
      <p>Taste the Finest at Kanha Hotel</p>
      <p>At Kanha Hotel, we redefine dining with a symphony of flavors. Embark on a gastronomic adventure where each dish is a masterpiece, meticulously prepared to tantalize your taste buds. Our chefs blend creativity and tradition, promising a culinary experience that lingers in your memory. Come, 'Taste the Finest,' and let your senses dance at Kanha Hotel's dining oasis. Dining Options</p>
    </div>
    </div>



    </div>
  )
}

export default memo(Home)

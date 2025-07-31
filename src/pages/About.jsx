import React from "react";

const About = () => {
  return (
    <>
    <section className="bg-white py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* ==== Image ==== */}
        <div className="w-full md:w-1/2">
          <img
            src="https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-IADGV_006-Dusk-Exterior-home.jpg" daal do
            alt="Kanha Hotel and Restaurant"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* ==== Text Content ==== */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Kanha Hotel & Restaurant
          </h2>
          <p className="text-gray-600">
            Welcome to <strong>Kanha Hotel and Restaurant</strong>, a trusted
            name in hospitality for the last 5 years. Conveniently located near{" "}
            <strong>NIMS University, Jugalpura, Jaipur (Rajasthan)</strong>, our
            hotel offers a peaceful stay right in front of the college, with
            beautiful natural surroundings.
          </p>
          <p className="text-gray-600">
            At Kanha, we provide our guests with <strong>home-like comfort</strong>{" "}
            and a <strong>VIP atmosphere</strong>. We offer all types of rooms —
            Deluxe, Luxury, AC, Non-AC — fully equipped for your comfort.
          </p>
          <p className="text-gray-600">
            Our in-house restaurant serves <strong>fresh and tasty Kanha food</strong>,
            loved for its homely flavors and quality. From breakfast to dinner,
            enjoy delicious meals without stepping out.
          </p>
          <p className="text-gray-600">
            Peaceful location, beautiful nature, modern facilities, and
            welcoming vibes — Kanha Hotel and Restaurant is the perfect choice
            for families, students, and travelers alike.
          </p>
          <button className="mt-4 inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full shadow">
            Book Your Stay Now
          </button>
        </div>
      </div>
    </section>
    <div className="bg-white  py-12 px-4 md:px-20">
      <div className="mt-3">
        <p className="font-medium text-xl">Our Story</p>
      <p className="text-gray-600 leading-7 text-lg" style={{alignItems:"jus"}} >Founded with a vision to create a sanctuary of luxury, our journey started with a commitment to exceptional hospitality. Each room, adorned with meticulous details and designed for absolute comfort, reflects our dedication to guest satisfaction. Our culinary adventures began in our kitchens, where passionate chefs crafted menus that celebrate local flavors and international cuisines. Over the years, Kanha Hotel has become a cherished destination, where travelers find solace, families create memories, and celebrations become extraordinary. Our story is one of warmth, dedication, and a relentless pursuit of creating unforgettable moments for our guests. Come, be a part of our story, and experience the essence of Kanha Hotel – where every stay is a tale of indulgence and hospitality.</p>
      </div>
      <div className="mt-6">
        <p className="font-medium text-xl">Our Vision</p>
      <p className="text-gray-600 leading-7 text-lg">At Kanha Hotel, our vision is to redefine hospitality by creating an oasis of tranquility and luxury, where every guest feels cherished and every moment becomes a cherished memory. We aspire to be the epitome of genuine warmth, offering personalized experiences that exceed expectations. Our aim is to cultivate an environment where comfort meets sophistication, and where every guest, whether here for leisure or business, feels a sense of belonging. Through unwavering dedication and attention to detail, we strive to be the destination of choice, where heartfelt hospitality becomes a hallmark of our identity.</p>
      </div>
      <div className="mt-6">
        <p className="font-medium text-xl">Our Commitments</p>
      <p className="text-gray-600 leading-7 text-lg">Our commitment at Kanha Hotel is deeply rooted in providing unparalleled service and hospitality to our guests. We pledge to offer an atmosphere of genuine care and respect, ensuring every guest feels valued and cherished. From the moment you arrive, our dedicated team is devoted to making your stay seamless, memorable, and tailored to your needs. We are committed to maintaining the highest standards of cleanliness, comfort, and guest satisfaction in every aspect of our service. Your trust in us is our most treasured asset, and we are committed to upholding it with every interaction, ensuring your experience at Kanha Hotel is nothing short of exceptional.</p>
      </div>
    </div>
    <div>
      <p className="text-center text-2xl ">Our Management</p>
    </div>
    </>
  );
};

export default About;

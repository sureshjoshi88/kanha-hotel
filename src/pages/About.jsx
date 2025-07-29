import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* ==== Image ==== */}
        <div className="w-full md:w-1/2">
          {/* Yaha ek hotel ki sundar image lagana */}
          <img
            src="https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-IADGV_006-Dusk-Exterior-home.jpg" // 👈 Yaha apni hotel ya restaurant ki image ka URL daal do
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
  );
};

export default About;

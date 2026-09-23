import { Link } from "react-router-dom";
import heroImage from "../assets/hero/hero-image.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 md:px-10 py-12 md:py-16 gap-10">

        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Simple Skincare.
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-8">
            Luxury-inspired skincare experience built for analytics.
          </p>

          <Link to="/shop">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:opacity-90 transition">
              Shop Now
            </button>
          </Link>

        </div>

        <div>
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-3xl w-full"
          />
        </div>

      </section>

    </div>
  );
}

export default Home;
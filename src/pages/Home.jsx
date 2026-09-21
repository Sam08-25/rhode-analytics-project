import heroImage from "../assets/hero/hero-image.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">

      <section className="grid md:grid-cols-2 items-center px-10 py-16 gap-12">

        <div>
          <h1 className="text-6xl font-serif mb-6">
            Simple Skincare.
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Luxury-inspired skincare experience built for analytics.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full">
            Shop Now
          </button>
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
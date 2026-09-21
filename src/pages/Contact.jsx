function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-serif mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-10">
        We'd love to hear from you.
      </p>

      <form className="bg-white p-8 rounded-3xl shadow-sm">

        <div className="mb-6">
          <label className="block mb-2">
            Name
          </label>

          <input
            type="text"
            className="w-full border p-3 rounded-xl"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Email
          </label>

          <input
            type="email"
            className="w-full border p-3 rounded-xl"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Message
          </label>

          <textarea
            rows="5"
            className="w-full border p-3 rounded-xl"
            placeholder="Write your message"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-full"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;
import React from "react";

const Scroll = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form className="space-y-4 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 w-full max-w-xs mx-auto border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 w-full max-w-xs mx-auto border border-gray-300 rounded-md"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="p-2 w-full max-w-xs mx-auto border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Scroll;

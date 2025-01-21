import axios from "axios";
import React from "react";

const Scroll = () => {
  const data = { fullName: "", email: "", message: "" };
  const [input, setInput] = React.useState(data);
  // destructure input here
  //   const { fullName, email, message } = input;
  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const trimmedInput = {
        fullName: input.fullName?.trim(),
        email: input.email?.trim(),
        message: input.message?.trim(),
      };
      if (
        trimmedInput.fullName !== "" &&
        trimmedInput.email !== "" &&
        trimmedInput.message !== ""
      ) {
        const res = await axios.post(
          "https://66d7d89d37b1cadd80527051.mockapi.io/api/v1/users",
          trimmedInput
        );
        alert("Submitted successfully");
      } else {
        alert("please fill all input field thank you.. ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col justify-center items-center"
        >
          <div className="w-full flex flex-col gap-4">
            <input
              value={input.fullName}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, fullName: e.target.value }))
              }
              type="text"
              placeholder="Your Name"
              className="p-2 w-full  shadow-lg max-w-xs mx-auto border border-gray-300 rounded-md"
            />
            <input
              value={input.email}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              placeholder="Your Email"
              className="p-2 w-full shadow-lg max-w-xs mx-auto border border-gray-300 rounded-md"
            />
          </div>
          <textarea
            value={input.message}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder="Your Message"
            className="p-2 w-full shadow-lg max-w-md mx-auto border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Scroll;

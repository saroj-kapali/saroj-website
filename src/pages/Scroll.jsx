import React from "react";
import { usePostContactMutation } from "../createApi/mockUserApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setFullName,
  setMessage,
  resetForm,
} from "../createSlice/contactFormSlice";
import GetMockUsers from "./GetMockUsers";
import {
  useGetMockUsersQuery,
  useUpdateMockUsersMutation,
} from "../createApi/getMockUserApi";

const Scroll = () => {
  const [sendData, { isLoading, error }] = usePostContactMutation();
  const [updateUser] = useUpdateMockUsersMutation();
  const { updateUser: updatedUsers } = useSelector(
    (state) => state.contactForm
  );

  const dispatch = useDispatch();
  const { refetch } = useGetMockUsersQuery();
  const { input } = useSelector((state) => state.contactForm);
  const { fullName, email, message } = input;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = {
      fullName: fullName?.trim().toUpperCase(),
      email: email?.trim(),
      message: message?.trim(),
    };

    // Input validation
    if (
      !trimmedInput.fullName ||
      !trimmedInput.email ||
      !trimmedInput.message
    ) {
      alert("Please fill all input fields.");
      return;
    }

    if (trimmedInput.message.length > 500) {
      alert("Message should not be longer than 500 characters.");
      return;
    }

    try {
      if (updatedUsers) {
        await updateUser({ id: updatedUsers.id, ...trimmedInput }).unwrap();
      } else {
        // Dispatch data to Redux and send it through RTK mutation
        await sendData(trimmedInput).unwrap();
      }

      dispatch(resetForm());
      refetch();
      alert("Submitted successfully");
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Have questions or need help? Fill out the form below and we’ll get
          back to you as soon as possible!
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto"
        >
          <div className="flex flex-col space-y-4">
            <input
              value={fullName}
              onChange={(e) => dispatch(setFullName(e.target.value))}
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <input
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : updatedUsers ? "Update" : "Submit"}
          </button>
        </form>
        {error && (
          <p className="text-red-500 mt-4">
            Submission failed. Please try again.
          </p>
        )}
      </div>
      <GetMockUsers />
    </section>
  );
};

export default Scroll;

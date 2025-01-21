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
  const { messageFrom, input } = useSelector((state) => state.contactForm);
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
      alert("Message should not be longer than 200 characters.");
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
      // alert("Submitted successfully");
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Something went wrong, please try again.");
    }
  };

  // handleUpdate

  const handleUpdate = () => {};

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
              value={fullName}
              onChange={(e) =>
                // setInput((prev) => ({ ...prev, fullName: e.target.value }))
                dispatch(setFullName(e.target.value))
              }
              type="text"
              placeholder="Your Name"
              className="p-2 w-full shadow-lg max-w-xs mx-auto border border-gray-300 rounded-md"
            />
            <input
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              type="text"
              placeholder="Your Email"
              className="p-2 w-full shadow-lg max-w-xs mx-auto border border-gray-300 rounded-md"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
            placeholder="Your Message"
            className="p-2 w-full shadow-lg max-w-md mx-auto border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-md"
            disabled={isLoading} // Disable the button while loading
          >
            {updatedUsers ? "Update" : "Submit"}
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

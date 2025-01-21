import React, { useState } from "react";
import {
  useDeleteMockUsersMutation,
  useGetMockUsersQuery,
} from "../createApi/getMockUserApi";
import { useDispatch, useSelector } from "react-redux";
import { getMessageFrom, updateUser } from "../createSlice/contactFormSlice";

const GetMockUsers = () => {
  const { data, refetch } = useGetMockUsersQuery();
  const [deletUser] = useDeleteMockUsersMutation();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {
    getMessageFrom: { message },
  } = useSelector((state) => state.contactForm);

  const handleDelete = async (id) => {
    try {
      await deletUser(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckMessage = async (user) => {
    try {
      await dispatch(getMessageFrom(user));

      setShow(!show);
    } catch (error) {
      console.log(error);
    }
  };

  //handle edit

  const handleEdit = (user) => {
    dispatch(updateUser(user));
  };

  return (
    <section className="flex flex-col w-full justify-center mt-10">
      {show && (
        <div className="flex  justify-center  items-center  font-bold ">
          <div className=" bg-white w-96 py-10 px-4 shadow-xl rounded-lg text-center ">
            {message}
          </div>
        </div>
      )}

      <h2 className="text-center font-bold">User Lists</h2>
      <div className="max-h-screen  mx-auto w-full   shadow-xl px-4">
        <div className="flex mx-auto flex-col gap-4 py-4 justify-center items-center">
          {data?.map((user) => (
            <ul
              key={user?.id}
              className="flex flex-wrap sm:flex-nowrap w-full sm:justify-around gap-4 sm:gap-10 border-b pb-4"
            >
              {/* User Info Section */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto">
                <li className="font-bold text-center sm:text-left">
                  {user?.fullName.toUpperCase()}
                </li>
                <li className="text-center sm:text-left">{user?.email}</li>
                <li
                  className="border hover:bg-neutral-950 px-2 py-1 text-center cursor-pointer hover:text-white rounded-sm"
                  onClick={() => handleCheckMessage(user)}
                >
                  {show ? "Close" : "Read Message"}
                </li>
              </div>

              {/* Action Buttons Section */}
              <div className="flex gap-3 justify-center sm:justify-start w-full sm:w-auto">
                <button
                  onClick={() => handleDelete(user?.id)}
                  className="border border-black px-2 py-1 rounded-sm hover:bg-red-500 hover:text-white"
                >
                  X
                </button>
                <button
                  onClick={() => handleEdit(user)}
                  className="border border-black px-2 py-1 rounded-sm hover:bg-blue-500 hover:text-white"
                >
                  Edit
                </button>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetMockUsers;

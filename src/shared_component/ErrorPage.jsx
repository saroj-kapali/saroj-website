import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl">404 Error</h2>
        <h1 className="text-[50px]">Page Not Found</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white"
          onClick={() => nav(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

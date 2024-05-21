import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <div className="h-[100vh] flex flex-col justify-center text-center">
      <h2 className="text-3xl">404 Error</h2>
      <h1 className="text-[50px]">Page Not Found</h1>
      <button className="" onClick={() => nav(-1)}>
        Back
      </button>
    </div>
  );
};

export default ErrorPage;

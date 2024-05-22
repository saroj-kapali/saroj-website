import React from "react";
import { footerData } from "../data/data";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <div className="flex justify-between items-center px-2">
    <div className="flex gap-20 justify-between w-[75%]">
    {footerData.map((a)=>(
      <div key={a.id} className="flex flex-col">
      <h2 className="font-bold">{a.title}</h2>
      <p className="text-[10px] text-gray-500">{a.content}</p>
    </div>
    ))} 
    </div>
    <div className="text-[10px] flex flex-col text-gray-500 text-right w-[25%]">
      <p>&copy; {year} By Saroj Kapali</p>
      <p>Created By Raj Maharjan</p>
    </div>
  </div>;
};

export default Footer;

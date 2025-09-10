import React from "react";

export default function Card({ title, value, unit, bgColor = "bg-white" }) {
  return (
    <div className={`${bgColor} p-4 rounded-lg shadow-md flex flex-col items-center justify-center`}>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-xl font-bold">{value}{unit}</p>
    </div>
  );
}

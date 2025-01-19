import React from "react";

export default function Input({ icon, ...props }) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <icon className="size-5 text-green-500" />
      </div>
      <input
        type="text"
        {...props}
        className="w-full pl-18 pr-3 py-2bg-gray-800 bg-opacity-50 
      rounded-1g border border-gray-700 focus:border-green-500 focus:ring-2
     focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
      />
    </div>
  );
}

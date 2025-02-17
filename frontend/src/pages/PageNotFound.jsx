import React from "react";
import page_not_found from "../assets/Homepage/page_not_found.png";

export default function () {
  return (
    <div className=" flex flex-col justify-center items-center py-24">
      <div className="w-96">
        <img loading="lazy" src={page_not_found} alt="" />
      </div>
    </div>
  );
}

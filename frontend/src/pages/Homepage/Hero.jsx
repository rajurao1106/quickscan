import React, { useContext } from "react";
import image from "../../assets/image.png";
import card_taping from "../../assets/Homepage/card-taping.webp";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-[4rem]">
      <div className="w-full max-w-[1200px] flex px-10 pt-10 max-lg:flex-col">
        <img loading="lazy" src={card_taping} alt="" className="w-[550px]" />
        <div className=" flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-10 max-md:text-center">
            Boost Your Google Reviews With Tapify
          </h1>
          <p className="mb-10 text-xl max-md:text-center">
            Tap into success with our NFC enabled Google Review Card. Simply tap
            the Smart Review Card on any Smartphone to instantly give your
            business a 5-star rating and leave a comment!
          </p>
          <button className="bg-blue-500 w-40 max-md:w-[100%] p-2 rounded-full text-lg font-semibold text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

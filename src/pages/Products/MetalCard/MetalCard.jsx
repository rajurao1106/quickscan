import React from "react";
import metal_card1 from "../../../assets/Products/MetalCard/metal-card1.png";
import metal_card2 from "../../../assets/Products/MetalCard/metal-card2.png";
import { Link } from "react-router-dom";

export default function GoldenMetalCard() {
  const Cards = [
    {
      image: metal_card1,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$2999",
      link: "/products/metal-smart-business-card/premium-gold-card",
    },
    {
      image: metal_card2,
      description:
        "Premium Silver NFC Business Card - Premium Quality Metal Card | QR Support & NFC Features",
      price: "$2999",
      link: "/products/metal-smart-business-card/premium-silver-card",
    },
    {
      image: metal_card1,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$2999",
      link: "",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1200px] pt-[5rem] flex flex-col justify-center items-center">
        <h1 className="text-4xl py-10">METAL CARD</h1>
        <div className="mb-10 w-full flex justify-between flex-wrap px-10">
          {Cards.map((card, index) => (
            <div className="border-gray-300 border-[1px] shadow-md w-[20rem] overflow-hidden rounded-md">
              <Link to={`${card.link}`} className="relative group">
                <img loading="lazy" className="" src={`${card.image}`} alt="" />
                <p className="absolute top-[50%] left-[35%] group-hover:block hidden transition-all text-white font-semibold border rounded-full px-4 p-2">
                  See more
                </p>
              </Link>
              <div className="p-2">{card.description}</div>
              <div className="p-2">{card.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useContext, useState } from "react";
import metal_card from "../../../assets/Products/MetalCard/metal-card1.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreProvider";

const productDetails = {
  image: metal_card,
  title:
    "Premium Gold - NFC Smart Business Card | Premium Silver 2 Business Card | QR Support | NFC-enabled",
  purchased: "80 Bought In Last Month",
  pricing: {
    currentPrice: "₹2999",
    originalPrice: "₹4999",
    delivery: "Free delivery",
  },
  description:
    "Premium Gold NFC Business Cards not only redefine the meaning of professional networking in this age of contactless but also make sharing your contact information, website, or social media profiles a breeze. This customizable NFC card is made from premium PVC and encompasses classiness, durability, and functionality to create truly seamless connections.",
};

const actions = [
  { text: "Buy Now", link: "/cart", style: "bg-white text-black" },
  { text: "Go To Cart", link: "/cart", style: "border-white text-white" },
];

export default function PremiumGoldCard() {
  const { updateData} = useContext(StoreContext);

 
  return (
    <section className="w-full flex justify-center items-center flex-col bg-blue-950">
      <div className="w-full flex justify-center items-center flex-col max-w-[1200px] pt-[5rem]">
        <div className="flex justify-center items-center gap-10 px-10">
          {/* Product Image */}
          <img src={productDetails.image} alt="Premium Metal Card" />

          {/* Product Details */}
          <div>
            {/* Title */}
            <h1 className="text-white text-2xl font-semibold">
              {productDetails.title}
            </h1>

            {/* Purchased Info */}
            <p className="text-gray-500 text-xl mb-5">
              {productDetails.purchased}
            </p>

            {/* Pricing Section */}
            <div className="flex gap-10 items-center mb-5">
              <p className="text-2xl text-white border-[2px] border-red-600 p-2 px-3 rounded-md">
                {productDetails.pricing.currentPrice}
              </p>
              <p className="text-2xl text-white line-through">
                {productDetails.pricing.originalPrice}
              </p>
              <p className="text-2xl text-white">
                {productDetails.pricing.delivery}
              </p>
            </div>

            {/* Click Counter */}
            

            {/* Action Buttons */}
            <div className="flex gap-5 mb-5">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className={`border-[2px] text-xl p-2 px-14 rounded-full ${action.style}`}
                >
                  <Link onClick={() => updateData(productDetails)} to={action.link}>
                    {action.text}
                  </Link>
                </button>
              ))}
            </div>

            {/* WhatsApp Button */}
            <button className="bg-green-600 text-white text-xl p-2 px-20 rounded-full mb-5">
              Get Best Offer On Whatsapp
            </button>

            {/* Description */}
            <h1 className="text-white text-2xl mb-5">Description</h1>
            <p className="text-white text-base">{productDetails.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

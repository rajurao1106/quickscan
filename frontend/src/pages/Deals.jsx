import React from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdTravelExplore } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import standee from "../assets/Deals/standee.jpeg";
import DataDisplay from "./Homepage/DataDisplay";

export default function Deals() {
  const Ordering = [
    {
      image: <BiSolidCartAdd className="text-7xl" />,
      heading: "Easy To Order",
      description: "Order in Just Few Steps",
    },
    {
      image: <RiSecurePaymentFill className="text-7xl" />,
      heading: "Payment Secure",
      description: "We Ensure 100% Secure Payment",
    },
    {
      image: <TbTruckDelivery className="text-7xl" />,
      heading: "Fast Delivery",
      description: "Fast Worldwide Shipping",
    },
  ];

  const Exploring = [
    {
      image: <MdTravelExplore className="text-7xl text-white" />,
      description: "Explore More Other Products",
      background: "bg-yellow-400",
    },
    {
      image: <FaRegIdCard className="text-7xl text-white" />,
      description: "Special Combos and Offers on card and Standee",
      background: "bg-blue-500",
    },
  ];

  const Deals = [
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
    {
      image: standee,
      description:
        "Fully Customizable NFC Business Card || Smart NFC Smart Business Card || NFC Card",
      price: "$299",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center bg-blue-950">
     
      <div className="w-full max-w-[1200px] pt-[8rem] flex flex-col justify-center items-center">
      
        <div className="flex flex-col justify-center items-center gap-10 w-full">
          <div className="flex gap-5 max-md:flex-col">
            {Ordering.map((order, index) => (
              <div className="border-[1px] border-white text-white py-5 px-5 flex items-center gap-2 rounded-xl">
                <div className="">{order.image}</div>
                <div className="">
                  <div className="font-semibold text-xl">{order.heading}</div>
                  <div className="">{order.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 max-md:flex-col">
            {Exploring.map((explore, index) => (
              <div
                className={`flex ${explore.background} justify-center items-center rounded-xl p-5 gap-2`}
              >
                <div className="">{explore.image}</div>
                <div className="text-2xl w-72 text-white">
                  {explore.description}
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full flex flex-wrap p-10 gap-5 ">
            {Deals.map((deal, index) => (
              <div className="bg-white rounded-xl overflow-hidden flex flex-col gap-2">
                <img src={deal.image} alt="" className="w-64"/>
                <div className="w-64 p-3 ">{deal.description}</div>
                <div className="p-3">{deal.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

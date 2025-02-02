import React, { useState } from "react";
import pricing_img1 from "../assets/Pricing/pricing-img1.png";

export default function Pricing() {
  const [sub, setSub] = useState(false);

  const Monthly = [
    {
      title: "Free Profile",
      price: "$50",
    },
    {
      title: "Standard",
      price: "$80",
    },
    {
      title: "Premium",
      price: "$124",
    },
  ];

  const Yearly = [
    {
      title: "Free Profile",
      price: "$150",
    },
    {
      title: "Standard",
      price: "$180",
    },
    {
      title: "Premium",
      price: "$1124",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center max-lg:text-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center pt-[5rem]">
        <div className="flex justify-center items-center px-10 max-lg:flex-col max-lg:text-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-semibold">
              Get Started with a Pro Package
            </h1>
            <p className="text-lg">
              Sign Up Today to access cutting-edge premium features designed to
              transform your business. From growth tools to success boosters—get
              EVERYTHING you need to thrive, all in one package. Your journey to
              the top starts here!
            </p>
            <button className="bg-blue-950 text-white max-lg:w-full p-3 rounded-full text-xl w-[12rem]">
              Try Pro Package
            </button>
          </div>
          <img src={pricing_img1} alt="" className="w-[30rem]" />
        </div>
        <h1 className="text-3xl font-semibold mb-3">
          Choose the best plan for you or your business.
        </h1>
        <p className="mb-5">
          Use the toggle below to switch between individual or team pricing
          plans
        </p>
        <div className="bg-gray-300 text-lg font-semibold border rounded-full flex">
          <button
            className={`${
              sub
                ? "bg-gray-300 p-3 px-5 rounded-full"
                : "bg-white p-3 px-5 rounded-full"
            }`}
            onClick={() => setSub(false)}
          >
            Yearly
          </button>
          <button
            className={`${
              sub
                ? "bg-white p-3 px-5 rounded-full"
                : "bg-gray-300 p-3 px-5 rounded-full"
            }`}
            onClick={() => setSub(true)}
          >
            Mothly
          </button>
        </div>
        {sub ? (
          <div className="w-full flex flex-wrap p-10 px-20 justify-between gap-5">
            {Monthly.map((monthly, index) => (
              <div className="bg-white rounded-xl overflow-hidden border-black border-[1px] shadow-lg ">
                <h1 className="text-4xl w-[20rem] font-bold bg-blue-950 text-white py-5 px-10 ">
                  {monthly.title}
                </h1>
                <p className="text-3xl font-bold p-8">{monthly.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className=" w-full flex flex-wrap p-10 px-20 justify-between gap-5">
            {Yearly.map((yearly, index) => (
              <div className="bg-white rounded-xl overflow-hidden border-black border-[1px] shadow-lg ">
                <h1 className="text-4xl w-[20rem] font-bold bg-blue-950 text-white py-5 px-10 ">
                  {yearly.title}
                </h1>
                <p className="text-3xl font-bold p-8">{yearly.price}</p>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center items-center px-14 max-lg:flex-col">
          <div className="">
            <h1 className="text-6xl font-bold mb-3">Enterprise Plan for Your Team</h1>
            <p className="text-xl mb-3">
              Vkardz offers team management with this plan. Manage employee card
              access, activities, and details. Add or remove members anytime,
              anywhere.
            </p>
            <button className="bg-blue-950 text-white p-3 rounded-full text-xl w-[12rem]">Learn More</button>
          </div>
          <img src={pricing_img1} alt="" className="w-[30rem]"/>
        </div>
      </div>
    </section>
  );
}

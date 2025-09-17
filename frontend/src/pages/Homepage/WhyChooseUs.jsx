import React from "react";
import Image1 from "../../assets/react.svg";
import Image2 from "../../assets/react.svg";
import Image3 from "../../assets/react.svg";
import { MdReviews } from "react-icons/md";
import { MdOutlineAddToHomeScreen } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { FaInfinity } from "react-icons/fa";
import { MdMobileOff } from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function WhyChooseUs() {
  const cards = [
    {
      image: <MdReviews className="text-6xl text-blue-950" />,
      heading: "Instant Reviews",
      description: "Quick feedback for your business solutions.",
    },
    {
      image: <MdOutlineAddToHomeScreen className="text-6xl text-blue-950" />,
      heading: "Custom Design",
      description: "Seamless NFC integration with any platform.",
    },
    {
      image: <MdPhoneEnabled className="text-6xl text-blue-950" />,
      heading: "NFC Enabled",
      description: "Top-notch security for your peace of mind.",
    },
    {
      image: <FaInfinity className="text-6xl text-blue-950" />,
      heading: "24/7 Support",
      description: "Reliable assistance anytime you need.",
    },
    {
      image: <MdMobileOff className="text-6xl text-blue-950" />,
      heading: "Customizable Options",
      description: "Tailored solutions to meet your business needs.",
    },
    {
      image: <GiGreenhouse className="text-6xl text-blue-950" />,
      heading: "Scalable Systems",
      description: "Grow effortlessly with scalable solutions.",
    },
    {
      image: <MdOutlinePriceCheck className="text-6xl text-blue-950" />,
      heading: "Eco-friendly",
      description: "Environmentally conscious solution for gathering feedback.",
    },
    {
      image: <FaIndianRupeeSign className="text-6xl text-blue-950" />,
      heading: "Cost Effective",
      description: "High-quality NFC cards at budget-friendly prices.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center py-10">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-5">Why Choose Us</h1>
        <p className="text-lg w-[600px] max-lg:w-full mb-8">
          Quickscan offers unparalleled NFC solutions, ensuring seamless
          integration, convenience, and unmatched reliability for your business.
        </p>
        <div className="flex justify-center flex-wrap gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[280px] border-black border rounded-lg overflow-hidden shadow-lg flex flex-col gap-8 py-10 px-5 items-center"
            >
              <p>{card.image}</p>

              <h2 className="text-2xl font-bold  mb-2">{card.heading}</h2>
              <p className=" text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

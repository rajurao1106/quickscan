import React from "react";
import digital_card_img1 from "../assets/Digital Cards/digital-card-img1.png";
import digital_card_img2 from "../assets/Digital Cards/digital-card-img2.png";
import digital_card_img3 from "../assets/Digital Cards/digital-card-img3.png";
import digital_card_img4 from "../assets/Digital Cards/digital-card-img4.png";
import digital_card_img5 from "../assets/Digital Cards/digital-card-img5.png";
import digital_card_img6 from "../assets/Digital Cards/digital-card-img6.png";
import digital_card_img7 from "../assets/Digital Cards/digital-card-img7.png";
import digital_card_img8 from "../assets/Digital Cards/digital-card-img8.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbPhoto } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { FaGears } from "react-icons/fa6";

export default function DigitalCards() {
  const Benefits = [
    {
      image: digital_card_img2,
      benefit: "Create & customize",
    },
    {
      image: digital_card_img3,
      benefit: "Share anywhere, anytime",
    },
    {
      image: digital_card_img4,
      benefit: "Save money & environment",
    },
  ];

  const Proccess = [
    {
      image: digital_card_img5,
      proccess: "01.Start by choosing a suitable template",
    },
    {
      image: digital_card_img6,
      proccess: "02. Add your details & contact options",
    },
    {
      image: digital_card_img7,
      proccess: "03. Publish or share with people",
    },
  ];

  const Features = [
    {
      image: <CgProfile />,
      heading: "Custom Profile",
      description:
        "Easily create and customize your personal profile to showcase your unique details and preferences efficiently.",
    },
    {
      image: <TbPhoto />,
      heading: "Photos",
      description:
        "Upload, manage, and organize your photo gallery seamlessly, ensuring a visually engaging experience for users.",
    },
    {
      image: <IoMdTime />,
      heading: "Appointment",
      description:
        "Schedule and manage appointments effortlessly, ensuring smooth and hassle-free planning with timely reminders.",
    },
    {
      image: <FaGears />,
      heading: "Services",
      description:
        "Explore and manage available services with ease, offering a streamlined and user-friendly experience.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center pt-[5rem]">
        <div className="flex w-full justify-center items-center px-14">
          <div className="">
            <h1 className="text-4xl font-bold mb-5">Digital Business Card</h1>
            <p className="text-xl mb-5">
              A digital business card is the easiest and most efficient way to
              instantly share your contact details, allowing seamless
              networking, quick access to your information, and eliminating the
              need for physical cards. It’s eco-friendly, customizable, and can
              be updated in real-time!
            </p>
            <button className="text-xl bg-blue-950 p-3 rounded-full text-white">
              Create A Digital Business Card
            </button>
          </div>
          <img src={digital_card_img1} alt="" />
        </div>
      </div>
      <div className="w-full bg-blue-950 flex flex-col justify-center items-center">
        <div className="max-w-[1200px] pt-[2rem] flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold mb-5">
            A digital business card has many benefits!
          </h1>
          <p className="text-xl text-white mb-10">
            Design digital business card is a professional & modern way to
            connect
          </p>
          <div className="flex gap-10">
            {Benefits.map((benefit, index) => (
              <div className="flex flex-col justify-center items-center gap-2 text-white">
                <img
                  src={benefit.image}
                  alt=""
                  className="rounded-xl bg-white"
                />
                <p className="text-xl">{benefit.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-[1200px] pt-[2rem] flex flex-col justify-center items-center mb-10">
          <h1 className="text-5xl font-bold mb-5">
            How to Create an Electronic Business Card ?
          </h1>
          <p className="text-xl mb-10">
            Here’s how you can make a digital card with help of this free-to-use
            DIT tool.
          </p>
          <div className="flex gap-10">
            {Proccess.map((proccess, index) => (
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src={proccess.image}
                  alt=""
                  className="rounded-xl bg-white"
                />
                <p className="text-xl text-center">{proccess.proccess}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="text-xl bg-blue-950 p-3 rounded-full text-white mb-10">
          Start Creating Your Digital Card
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-[1200px] pt-[2rem] flex justify-center items-center mb-10 px-14">
          <div className="px-14">
            <h1 className="text-5xl font-bold mb-5">
              What is a digital business card ?
            </h1>
            <p className="text-xl mb-10">
              A digital business card app offers a modern solution for
              exchanging contact information. Also referred to as virtual or
              electronic business cards, these digital versions are highly
              customizable, interactive, easy to share, and a cost-effective
              alternative to traditional physical cards.
            </p>
            <div className="flex gap-10">
              <div className="text-center">
                <p className="bg-blue-950 text-white text-4xl p-5 text-center rounded-xl font-semibold">
                  1500+
                </p>
                <p>Brands trust Vkardz for business cards.</p>
              </div>
              <div className="text-center">
                <p className="bg-blue-950 text-white text-4xl p-5 text-center rounded-xl font-semibold">
                  10K+
                </p>
                <p>VKardz cards were received in the last year.</p>
              </div>
              <div className="text-center">
                <p className="bg-blue-950 text-white text-4xl p-5 text-center rounded-xl font-semibold">
                  10X
                </p>
                <p>New connections are much more likely to follow up.</p>
              </div>
            </div>
          </div>
          <img src={digital_card_img8} alt="" />
        </div>
      </div>
      <div className="max-w-[1200px] bg-blue-950 w-full flex justify-center items-center mb-10 px-14 text-white rounded-3xl p-10">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-10">
            Most trusted and reviewed digital business card platform.
          </h1>
          <div className="flex text-5xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="border p-8 text-center text-white rounded-xl">
            <p className="text-5xl">20K+</p>
            <p className="text-xl">Successful Users</p>
          </div>
          <div className="border p-8 text-center text-white rounded-xl">
            <p className="text-5xl">20K+</p>
            <p className="text-xl">Successful Users</p>
          </div>
          <div className="border p-8 text-center text-white rounded-xl">
            <p className="text-5xl">20K+</p>
            <p className="text-xl">Successful Users</p>
          </div>
          <div className="border p-8 text-center text-white rounded-xl">
            <p className="text-5xl">20K+</p>
            <p className="text-xl">Successful Users</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-5">Advanced Features</h1>
          <p className="text-lg">
            Offering Custom Digital Business card For You
          </p>
          <p className="text-lg mb-10">
            We have developed a set of impressive features aimed at creating
            vkardz.com, the best digital business card.
          </p>
        </div>
        <div className="bg-blue-950 flex overflow-x-scroll space-x-4 p-4">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md min-w-[200px]"
            >
              <div className="text-3xl mb-2">{feature.image}</div>
              <h1 className="text-lg font-semibold text-gray-800 mb-1">
                {feature.heading}
              </h1>
              <p className="text-sm text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

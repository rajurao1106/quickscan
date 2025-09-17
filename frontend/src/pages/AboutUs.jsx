import React from "react";
import about_img1 from "../assets/Digital Cards/digital-card-img8.png";

export default function AboutUs() {
  return (
    <section className="w-full flex justify-center items-center max-lg:text-center ">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center pt-[5rem]">
        <div className="flex justify-center items-center gap-10 px-10 max-lg:flex-col-reverse">
          <div className="py-10">
            <h1 className="text-4xl font-bold mb-10">
              Introducing Quickscan – Your Gateway to Enhanced Networking and
              Engagement!
            </h1>
            <p className="text-lg">
              At Quickscan, we’re passionate about revolutionizing the way
              businesses connect and engage with their customers. <br />
              <br /> Specializing in the manufacturing and distribution of NFC
              Google Review cards, NFC smart business cards, and an array of
              innovative NFC networking solutions, we’re on a mission to
              redefine digital interactions. <br />
              <br /> With cutting-edge technology and a commitment to
              excellence, we empower businesses to amplify their online
              presence, foster meaningful relationships, and unlock new
              opportunities for growth. <br />
              <br /> Join us on our journey as we pave the way for smarter, more
              connected futures.
            </p>
          </div>
          <img loading="lazy" src={about_img1} alt="" />
        </div>
      </div>
    </section>
  );
}

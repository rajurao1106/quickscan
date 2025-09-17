import React from "react";
import logo from "../assets/Navbar/logo.webp";

export default function Footer() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-blue-950 text-white">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <div className=" py-10 grid-cols-4 grid gap-5 max-lg:grid-cols-1 max-md:text-center ">
          <div className=" max-lg:items-center max-md:flex max-lg:flex-col">
            {/* <img loading="lazy" src={logo} alt="" className="w-28" /> */}
            <p className="text-2xl mb-4 font-bold">Quick Scan</p>
            <p>
              We at Quickscan, redefining connections with NFC review & digital
              visiting cards. Elevate networking effortlessly. 🌟{" "}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-yellow-400 text-2xl font-bold">
              Customer Care
            </h1>
            <ul>
              <li>Timings: 10 AM – 7 PM (Mon – Sat)</li>
              <li>Whatsapp: +91-9148087687</li>
              <li>Call: +91-9148087687</li>
              <li>Email: Info@Quickscan.in</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-yellow-400 text-2xl font-bold">
              Customer Care
            </h1>
            <ul>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Track Orders</li>
              <li>For Bulk Orders</li>
              <li>Compatible Devices</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-yellow-400 text-2xl font-bold">Shop</h1>
            <ul>
              <li>Smart Review cards</li>
              <li>Smart Standee</li>
              <li>Smart Combo</li>
            </ul>
          </div>
        </div>
        <div className="w-[90%] h-[1px] bg-white"></div>
        <div className="flex justify-between py-3 items-center text-center text-[14px] flex-col">
          <p>
            © 2024 Quickscan. All rights reserved | Designed and Developed by{" "}
            <a href="https://pracharkarsolutions.com">pracharkarsolutions</a>
          </p>
          <p>
            Privacy Policy | Refund Policy | Terms & Conditions | Shipping &
            Delivery
          </p>
        </div>
      </div>
    </section>
  );
}

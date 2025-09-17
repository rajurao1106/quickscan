import React, { useContext, useState } from "react";
import logo from "../assets/Navbar/logo.webp";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { StoreContext } from "./context/StoreProvider";
import SignInModal from "./SignInModal";
import useCartStore, { useAuthStore } from "../store/authStore";
import AddCart from "./AddCart";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false); // Toggle for SignIn Modal
  const { cart, fetchProducts, deleteProduct } = useCartStore();

  const { count, updatCart } = useContext(StoreContext);

  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const [addCart, setAddCart] = useState(false);
  const addCartHandle = () => {
    setAddCart(!addCart);
  };

  return (
    <section className="w-full fixed bg-blue-950 text-white flex flex-col justify-center items-center z-50">
      <div className="max-w-[1200px] w-full h-[70px] justify-between items-center flex px-4 text-base">
        {/* Logo */}
        <Link to={"/"} >
          <p className="text-2xl font-bold">Quick Scan</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About-Us" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Deals" className="hover:text-gray-300">
              Deals
            </Link>
          </li>
          <li className="group inline-block flex-col items-center py-5">
            <Link to="/Products" className="flex items-center">
              Products{" "}
              <RiArrowDropDownLine className="ml-1 transition-all group-hover:rotate-180 text-2xl" />
            </Link>

            <div className="absolute top-[96%] h-[70vh] left-0 bg-[#68686896] backdrop-filter backdrop-blur-md text-white shadow-lg group-hover:block hidden p-3 w-[100vw] ">
              <div className="flex justify-center items-center h-full">
                <div className=" flex w-[80%] justify-around items-center ">
                  <div className="flex flex-col ">
                    <Link
                      to={"/products/metal-smart-business-card"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Metal Card
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Wooden Card
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      PVC Card
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Other NFC Product
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Professinal Cards
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Social Cards
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Special Combo
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      NFC Smart Standees
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Doctor
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      CA
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Lawyer
                    </Link>
                    <Link
                      to={"/products/"}
                      className="p-2 hover:border-white border-[#68686800] border hover:rounded-md"
                    >
                      Student
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/Pricing" className="hover:text-gray-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/digital-business-cards" className="hover:text-gray-300">
              Digital Business Card
            </Link>
          </li>
          <li>
            <Link to="/Testimonials" className="hover:text-gray-300">
              Testimonials
            </Link>
          </li>
        </ul>

        {/* User & Cart */}
        <div className="hidden md:flex gap-5 justify-center items-center">
          <p
            className="hover:text-gray-300 cursor-pointer text-3xl bg-yellow-400 rounded-full p-2 relative"
            onClick={updatCart}
          >
            <p className="text-sm absolute -right-1 top-0 text-black bg-white rounded-full px-1">
              {cart.length}
            </p>{" "}
            <MdOutlineShoppingCart onClick={addCartHandle} />
          </p>
          <div
            className={`${
              addCart
                ? "absolute w-[30%] h-screen bg-blue-950 top-0 right-0 text-white"
                : "absolute w-[0%] h-screen bg-white top-0 right-0 text-white hidden"
            }`}
          >
            <button
              onClick={addCartHandle}
              className="text-4xl relative left-[55vh] p-5"
            >
              <IoIosCloseCircleOutline />
            </button>
            <AddCart />
          </div>
          <p
            className=" cursor-pointer text-5xl group "
            // Open Sign-In Modal
          >
            <FaUserCircle />
            <div className="text-lg absolute bg-gray-400 rounded-md hidden group-hover:block">
              <div className="flex flex-col">
                <Link
                  to={"/dashboard"}
                  className="hover:bg-gray-500 rounded-md p-2 px-5"
                >
                  Dashbord
                </Link>
                <Link
                  onClick={handleLogout}
                  className="hover:bg-gray-500 rounded-md p-2 px-5"
                >
                  Logout
                </Link>
              </div>
            </div>
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-center gap-5 w-full bg-blue-950 text-white py-4 md:hidden">
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About-Us" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Deals" onClick={() => setIsMobileMenuOpen(false)}>
              Deals
            </Link>
          </li>
          <li>
            <Link to="/Products" onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/Pricing" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/digital-business-cards"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Digital Business Card
            </Link>
          </li>
          <li>
            <Link to="/Testimonials" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}

      {/* SignIn Modal */}
      {isSignInOpen && <SignInModal onClose={() => setIsSignInOpen(false)} />}
    </section>
  );
}

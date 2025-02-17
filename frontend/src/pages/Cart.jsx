import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { StoreContext } from "./context/StoreProvider";
import useCartStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { selectedData = {}, updateCalculate } = useContext(StoreContext);
  const { cart, fetchProducts, addProduct, deleteProduct } = useCartStore();
  const navigate = useNavigate();

  const CartSteps = [
    {
      number: "01",
      heading: "Shopping Cart",
      para: "Manage Your item list",
      color: "text-white",
    },
    {
      number: "02",
      heading: "Delivery Address",
      para: "Add Your Address",
      color: "text-gray-400",
    },
    {
      number: "03",
      heading: "Checkout Detail",
      para: "Checkout Your item list",
      color: "text-gray-400",
    },
  ];

  const [inputValue, setInputValue] = useState(() => {
    const storedInputValue = localStorage.getItem("inputValue");
    return storedInputValue ? Number(JSON.parse(storedInputValue)) : 1;
  });

  const handleInputChange = (event) => {
    const value = Math.max(1, Number(event.target.value)); // Ensure quantity is at least 1
    setInputValue(value);
    localStorage.setItem("inputValue", JSON.stringify(value));
  };

  const itemPrice = selectedData?.pricing?.currentPrice
    ? parseFloat(
        selectedData.pricing.currentPrice.replace("₹", "").replace(",", "")
      )
    : 0;

  const quantity = itemPrice * inputValue;
  const gstAmount = (quantity * 18) / 100;
  const totalCost = quantity + gstAmount;

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(selectedData?.title, totalCost, inputValue);
    navigate("/delivery-details");
  };

  return (
    <section className="w-full flex flex-col justify-center items-center bg-blue-950">
      <div className="bg-[#ffffff2c] w-full flex flex-col justify-center items-center mb-5">
        <div className="w-full max-w-[900px] flex justify-between py-3 pt-[5rem]">
          {CartSteps.map((cart, index) => (
            <div
              key={index}
              className={`flex items-start ${cart.color} gap-1 py-3`}
            >
              <p className="text-5xl font-bold">{cart.number}</p>
              <div className="text-lg">
                <h1>{cart.heading}</h1>
                <p className="text-sm">{cart.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1200px] flex max-lg:flex-col items-start justify-center max-lg:items-center gap-5">
        <div className="w-full bg-white rounded-lg p-2 flex justify-center items-start gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-lg font-semibold">Image</p>
            <img
              loading="lazy"
              src={selectedData?.image}
              alt={selectedData?.title}
              className="w-[8rem] rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-lg font-semibold">Product Name</p>
            <p className="font-semibold">{selectedData?.title}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-lg font-semibold">Quantity</p>
            <input
              type="number"
              min={1}
              value={inputValue}
              onChange={handleInputChange}
              className="w-10 border text-center outline-none"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-lg font-semibold">Price</p>
            <p className="text-lg font-semibold">{`₹${quantity.toFixed(2)}`}</p>
          </div>
        </div>

        <div className="w-[40%] max-lg:w-[90%] bg-[#ffffff48] text-white border p-5 flex flex-col justify-center items-center gap-5 rounded-xl">
          <h1 className="text-2xl font-semibold">Summary</h1>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Sub-Total</p>
            <p>₹{quantity.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>GST (18%)</p>
            <p>₹{gstAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between text-2xl font-bold w-full">
            <p>Total Cost</p>
            <p>₹{totalCost.toFixed(2)}</p>
          </div>
          {/* <Link
            to="/delivery-details"
            onClick={() => updateCalculate({ quantity, gstAmount, totalCost, inputValue })}
            className="w-[90%] text-black bg-white p-3 rounded-full font-semibold text-lg text-center"
          >
            Continue
          </Link> */}
          <button
            className="w-[90%] text-black bg-white p-3 rounded-full font-semibold text-lg text-center"
            onClick={handleAddProduct}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}

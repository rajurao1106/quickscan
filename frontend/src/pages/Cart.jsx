import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "./context/StoreProvider";

export default function Cart() {
  const { selectedData = [], updateCalculate } = useContext(StoreContext);

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
    const storedInputValue = localStorage.getItem('inputValue');
    return storedInputValue ? JSON.parse(storedInputValue) : "1"; // Use `Number()` for conversion
  });
  
  // Initial value set to 1

  const handleInputChange = (event) => {
    // Ensure input is always a number and update the state
    const value = event.target.value;
    setInputValue(value);
    localStorage.setItem('inputValue', JSON.stringify(value));
  };



  // Parse the price as a float and round it to 2 decimals
  const itemPrice = selectedData?.pricing?.currentPrice
    ? parseFloat(selectedData.pricing.currentPrice.replace("₹", "").replace(",", ""))
    : 0;

  // Calculate quantity, GST, and total cost
  const quantity = itemPrice * inputValue;
  const gstAmount = (quantity * 18) / 100; // GST is 18%
  const totalCost = quantity + gstAmount;

  return (
    <section className="w-full flex flex-col justify-center items-center bg-blue-950">
      {/* Cart Steps */}
      <div className="bg-[#ffffff2c] w-full flex flex-col justify-center items-center mb-5">
        <div className="w-full max-w-[900px] flex justify-between py-3 pt-[5rem]">
          {CartSteps.map((cart, index) => (
            <div key={index} className={`flex items-start ${cart.color} gap-1 py-3`}>
              <p className="text-5xl font-bold">{cart.number}</p>
              <div className="text-lg">
                <h1>{cart.heading}</h1>
                <p className="text-sm">{cart.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* {
  selectedData.map((info, index) => (
    <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4 w-full">
      <h3 className="text-lg font-bold">{info.title}</h3>
      <p className="text-sm text-gray-600">{info.description}</p>
      <img
        src={info.image} // Replace with the correct property for your image
        alt={info.title}
        className="w-full h-40 object-cover rounded-md"
      />
    </div>
  ))
} */}
 
      <div className="w-full max-w-[1200px] flex items-start justify-center gap-5">
        <div className="w-full bg-white rounded-lg p-2 flex justify-center items-start gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-lg font-semibold">Image</p>
            <img
              src={selectedData?.image} // Fixed image source here
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
              value={inputValue} // Controlled value
              onChange={handleInputChange}
              className="w-10 border text-center outline-none"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-lg font-semibold">Price</p>
            <p className="text-lg font-semibold">{`₹${quantity.toFixed(2)}`}</p>
          </div>
        </div>

        <div className="w-[40%] bg-[#ffffff48] text-white border p-5 flex flex-col justify-center items-center gap-5 rounded-xl">
          <h1 className="text-2xl font-semibold">Summary</h1>

          {/* Subtotal */}
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Sub-Total</p>
            <p>₹{quantity.toFixed(2)}</p>
          </div>

          {/* GST */}
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>GST (18%)</p>
            <p>₹{gstAmount.toFixed(2)}</p>
          </div>

          {/* Delivery Charges */}
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>

          {/* Total Cost */}
          <div className="flex justify-between text-2xl font-bold w-full">
            <p>Total Cost</p>
            <p>₹{totalCost.toFixed(2)}</p>
          </div>

          {/* Continue Button */}
          <Link
            to="/delivery-details"
            onClick={() => updateCalculate({ quantity, gstAmount, totalCost, inputValue })}
            className="w-[90%] text-black bg-white p-3 rounded-full font-semibold text-lg text-center"
          >
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
}

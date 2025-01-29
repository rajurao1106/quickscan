import React, { useEffect, useContext } from "react";
import { StoreContext } from "./context/StoreProvider";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import razorpay from "../assets/Homepage/razorpay.png";

export default function Payment() {
  const { addresses, selectedData, calculate } = useContext(StoreContext);

  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const keyId = "rzp_test_rnzCxSf5oYy7vE"; // Your Razorpay Key ID

    // Step 1: Fetch Order ID from Backend
    const response = await fetch("http://localhost:3000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: calculate?.totalCost || 1 }) // Amount in rupees
    });

    const orderData = await response.json(); // Get order ID from backend

    // Step 2: Configure Razorpay Checkout
    const options = {
      key: keyId,
      amount: orderData.amount, // Amount in paise
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      image: "https://example.com/your_logo",
      order_id: orderData.id, // Dynamic Order ID from backend
      callback_url: "https://your-backend-url/payment-success",
      prefill: {
        name: addresses?.name || "John Doe",
        email: "johndoe@example.com",
        contact: "9000090000"
      },
      notes: { address: addresses?.address || "N/A" },
      theme: { color: "#3399cc" }
    };

    // Step 3: Open Razorpay Checkout
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const CartSteps = [
    { number: "01", heading: "Shopping Cart", para: "Manage Your item list", color: "text-gray-400" },
    { number: "02", heading: "Delivery Address", para: "Add Your Address", color: "text-gray-400" },
    { number: "03", heading: "Checkout Detail", para: "Checkout Your item list", color: "text-white" }
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center bg-blue-950">
      {/* Steps Indicator */}
      <div className="bg-[#ffffff2c] w-full flex flex-col justify-center items-center mb-5">
        <div className="w-full max-w-[900px] flex justify-between py-3 pt-[5rem]">
          {CartSteps.map((step, index) => (
            <div key={index} className={`flex ${step.color} gap-1 py-3`}>
              <p className="text-5xl font-bold">{step.number}</p>
              <div className="text-lg">
                <h1>{step.heading}</h1>
                <p className="text-sm">{step.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1200px] flex items-start justify-center gap-5">
        {/* Left Section: Product & Address */}
        <div className="w-[60%]">
          <h1 className="text-3xl font-bold mb-5 text-white">Payment Page</h1>

          {/* Product Details */}
          <div className="w-full bg-white rounded-lg p-2 flex justify-center items-start gap-5 mb-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-lg font-semibold">Image</p>
              <img
                src={selectedData?.image || ""}
                alt={selectedData?.title || "No Image"}
                className="w-[8rem] rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-lg font-semibold">Product Name</p>
              <p className="font-semibold">{selectedData?.title || "N/A"}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-lg font-semibold">Price</p>
              <p className="text-lg flex font-semibold">{`₹${selectedData?.pricing?.currentPrice || 0}`}</p>
            </div>
          </div>

          {/* Address Details */}
          <div className="w-full text-white">
            <div className="mb-5 bg-[#ffffff48] border rounded-xl p-3 relative">
              <Link to={"/delivery-details"}>
                <FiEdit className="absolute right-3 top-3 text-2xl" />
              </Link>
              <p><strong>Name:</strong> {addresses?.name || "N/A"}</p>
              <p><strong>Address:</strong> {addresses?.address || "N/A"}</p>
              <p><strong>City:</strong> {addresses?.city || "N/A"}</p>
              <p><strong>Postal Code:</strong> {addresses?.postalCode || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="w-[40%] bg-[#ffffff48] text-white border p-5 flex flex-col justify-center items-center gap-5 rounded-xl">
          <h1 className="text-2xl font-semibold">Summary</h1>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Sub-Total</p>
            <p>₹{calculate?.quantity || 0}</p>
          </div>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>GST (18%)</p>
            <p>₹{calculate?.gstAmount || 0}</p>
          </div>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between text-2xl font-bold w-full">
            <p>Total Cost</p>
            <p>₹{calculate?.totalCost || 0}</p>
          </div>
          <div className="flex flex-col justify-between w-full">
            <h1 className="text-2xl font-bold">Payment Method</h1>
            <p>All transactions are secured and encrypted</p>
          </div>
          <div className="p-3 rounded-xl border">
            <p>Credit Card/Debit Card/Banking/UPI</p>
            <h1 className="text-xl font-bold flex items-center mb-5">
              <img src={razorpay} alt="Razorpay" className="w-10" /> Pay by Razorpay
            </h1>
            <p>Pay securely by Debit or Credit Card or Internet Banking through Razorpay</p>
          </div>
          <button 
            onClick={handlePayment}
            className="w-full text-black bg-white p-3 rounded-full font-semibold text-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

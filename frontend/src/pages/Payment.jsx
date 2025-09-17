import React, { useEffect, useContext } from "react";
import { StoreContext } from "./context/StoreProvider";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Trash2 } from "react-feather";
import razorpay from "../assets/Homepage/razorpay.png";
import useCartStore, { useAuthStore } from "../store/authStore";

export default function Payment() {
  const { addresses, selectedData } = useContext(StoreContext);
  const { cart, fetchProducts, deleteProduct } = useCartStore();
  const { user } = useAuthStore();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const keyId = "rzp_test_rnzCxSf5oYy7vE";

    const response = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalCost.toFixed(2) || 1 }),
    });

    const orderData = await response.json();

    const options = {
      key: keyId,
      amount: orderData.amount,
      currency: "INR",
      name: "Quickscan",
      description: "Order Payment",
      image: "https://example.com/your_logo",
      order_id: orderData.id,
      callback_url: "https://your-backend-url/payment-success",
      prefill: {
        name: addresses?.name || "John Doe",
        email: "johndoe@example.com",
        contact: "9000090000",
      },
      notes: { address: addresses?.address || "N/A" },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Steps for cart process
  const CartSteps = [
    {
      number: "01",
      heading: "Shopping Cart",
      para: "Manage Your item list",
      color: "text-gray-400",
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
      color: "text-white",
    },
  ];

  // Calculate the total of all product subtotals
  const totalSubtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const gstAmount = totalSubtotal * 0.18; // 18% GST
  const totalCost = totalSubtotal + gstAmount; // Final total

  return (
    <section className="w-full flex flex-col justify-center items-center bg-blue-950">
      {/* Cart Steps */}
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
      <div className="flex w-full max-w-[1200px] gap-10 text-white max-lg:flex-col justify-center items-start max-lg:justify-center max-lg:items-center">
        {/* Cart Items List */}
        <ul className="flex flex-col gap-10 w-[60%] max-lg:w-[90%]  ">
          {cart.map((product) => (
            <li
              key={product._id}
              className="rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow bg-blue-900 p-3"
            >
              <div>
                <div className="flex flex-col md:flex-row gap-6 ">
                  <div className="w-[200px] flex-shrink-0">
                    <img
                      loading="lazy"
                      src={selectedData.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold mb-2">
                        {product.product}
                      </h3>
                      <p className="flex items-center justify-between">
                        <span>Price:</span>
                        <span className="font-medium flex gap-1">
                          {product.quantity} X{" "}
                          <span className="text-orange-500">
                            {product.price}
                          </span>
                        </span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Subtotal:</span>
                        <span className="font-medium">
                          ₹{(product.price * product.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Right Section: Summary */}
        <div className="w-[40%] max-lg:w-[90%] bg-[#ffffff48] text-white border p-5 flex flex-col justify-center items-center gap-5 rounded-xl">
          <h1 className="text-2xl font-semibold">Summary</h1>

          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Sub-Total</p>
            <p>₹{totalSubtotal.toFixed(2)}</p>
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

          <div className="flex flex-col justify-between w-full">
            <h1 className="text-2xl font-bold">Payment Method</h1>
            <p>All transactions are secured and encrypted</p>
          </div>

          <div className="p-3 rounded-xl border">
            <p>Credit Card/Debit Card/Banking/UPI</p>
            <h1 className="text-xl font-bold flex items-center mb-5">
              <img
                loading="lazy"
                src={razorpay}
                alt="Razorpay"
                className="w-10"
              />{" "}
              Pay by Razorpay
            </h1>
            <p>
              Pay securely by Debit or Credit Card or Internet Banking through
              Razorpay
            </p>
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

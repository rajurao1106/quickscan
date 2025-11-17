import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "./context/StoreProvider";
import { FiEdit } from "react-icons/fi";

export default function DeliveryDetails() {
  const { updateAddress, selectedData, calculate } = useContext(StoreContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);  // Track if we are editing an address
  const [editingIndex, setEditingIndex] = useState(null);  // Index of the address to be edited
  const [addressList, setAddressList] = useState(() => {
    // Load initial state from localStorage (only one address)
    const savedAddress = localStorage.getItem("addressList");
    return savedAddress ? JSON.parse(savedAddress) : null; // Store single address, not an array
  });
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    // Save the single address to localStorage when it changes
    if (addressList) {
      localStorage.setItem("addressList", JSON.stringify(addressList));
    }
  }, [addressList]);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsEditing(false);  // Reset editing state when closing the popup
    setFormData({ name: "", address: "", city: "", postalCode: "" });  // Clear form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update the existing address
      setAddressList(formData);
    } else {
      // Set new address (overwrite the previous one)
      setAddressList(formData);
    }

    setFormData({ name: "", address: "", city: "", postalCode: "" });
    setIsPopupOpen(false);
  };

  const handleEdit = () => {
    setFormData(addressList);
    setIsEditing(true);  // Set editing mode
    setIsPopupOpen(true);  // Open the popup
  };

  const cartSteps = [
    {
      number: "01",
      heading: "Shopping Cart",
      description: "Manage your item list",
      color: "text-gray-400",
    },
    {
      number: "02",
      heading: "Delivery Address",
      description: "Add your address",
      color: "text-white",
    },
    {
      number: "03",
      heading: "Checkout Detail",
      description: "Checkout your item list",
      color: "text-gray-400",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center bg-blue-950 px-4 sm:px-8 md:px-16">
      {/* Cart Steps */}
      <div className="bg-[#ffffff2c] w-full flex flex-col justify-center items-center mb-5">
        <div className="w-full max-w-[900px] flex flex-wrap justify-between py-3 pt-[5rem]">
          {cartSteps.map((step) => (
            <div key={step.number} className={`flex ${step.color} gap-1 py-3 w-full sm:w-auto`}>
              <p className="text-5xl font-bold">{step.number}</p>
              <div className="text-lg">
                <h1>{step.heading}</h1>
                <p className="text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Details and Summary */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-start gap-5 justify-center">
        <div className="w-full md:w-[55%] rounded-lg p-2 flex flex-col gap-5">
          <h1 className="text-white text-3xl font-semibold">Delivery Details</h1>
          <div
            className="flex flex-col bg-[#ffffff2c] border items-center justify-center cursor-pointer gap-2 rounded-xl h-28"
            onClick={handleOpenPopup}
          >
            <div className="flex flex-col justify-center items-center text-white">
              <p className="text-4xl font-semibold">+</p>
              <p className="text-2xl font-semibold">Add New Delivery Address</p>
            </div>
          </div>

          {/* Address List */}
          <div className="bg-[#ffffff2c] border p-4 rounded-xl text-white relative">
            {addressList && (
              <div className="mb-2">
                <p><strong>Name:</strong> {addressList.name}</p>
                <p><strong>Address:</strong> {addressList.address}</p>
                <p><strong>City:</strong> {addressList.city}</p>
                <p><strong>Postal Code:</strong> {addressList.postalCode}</p>
                <button
                  onClick={handleEdit}
                  className="text-white text-xl mt-2 absolute top-0 right-0 pr-5"
                >
                  <FiEdit className="absolute right-3 top-3 text-2xl"/>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="w-full md:w-[40%] bg-[#ffffff48] text-white border p-5 flex flex-col justify-center items-center gap-5 rounded-xl mt-5 md:mt-0">
          <h1 className="text-2xl font-semibold">Summary</h1>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Sub-Total</p>
            <p>₹{calculate?.quantity}</p>
          </div>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>GST (18%)</p>
            <p>₹{calculate?.gstAmount}</p>
          </div>
          <div className="flex justify-between text-xl w-full border-b pb-5">
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between px-3 text-2xl font-bold w-full">
            <p>Total Cost</p>
            <p>₹{calculate?.totalCost}</p>
          </div>
          <Link
            to="/payment"
            className="w-[90%] text-black bg-white p-3 rounded-full font-semibold text-lg text-center"
            onClick={() => updateAddress(addressList)}
          >
            Continue
          </Link>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Address" : "Add New Address"}</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="border p-2 rounded"
                required
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {isEditing ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

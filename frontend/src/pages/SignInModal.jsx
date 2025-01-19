import React, { useState } from "react";

export default function SignInModal({ onClose }) {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Create Account
  const [isNewUser, setIsNewUser] = useState(false); // Check if the user is new

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isNewUser ? "Create Your Account" : "Welcome Back"}
        </h2>

        {/* Form for New User Registration */}
        {isNewUser ? (
          <form className="flex flex-col gap-4">w
            <input
              type="text"
              placeholder="Full Name"
              className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />w
            <input
              type="password"
              placeholder="Password"
              className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold"
            >
              Create Account
            </button>
          </form>
        ) : (
          // Form for Sign In
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold"
            >
              Sign In
            </button>
          </form>
        )}

        {/* Footer Links */}
        <div className="mt-6 flex justify-between items-center">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsNewUser(!isNewUser)}
          >
            {isNewUser ? "Already have an account? Sign In" : "New User? Create Account"}
          </button>
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={onClose} // Close Modal
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

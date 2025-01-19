import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useAuthStore } from "../../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex justify-center items-center pt-[5rem] ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[30rem] max-sm:w-[90%] bg-blue-950 my-20 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Welcome Back
          </h2>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
			  className="w-[100%] h-10 mb-8 pl-3 outline-none rounded"
            />

            {/* Password Input */}
            <input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
			  className="w-[100%] h-10 mb-8 pl-3 outline-none rounded"
            />

            {/* Forgot Password Link */}
            <div className="flex items-center mb-6">
              <Link
                to="/forgot-password"
                className="text-sm text-green-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 text-white font-bold rounded-lg shadow-lg bg-blue-500 transition duration-200"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </motion.button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

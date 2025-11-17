import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage/Homepage";
import WhyChooseUs from "./pages/Homepage/WhyChooseUs";
import Deals from "./pages/Deals";
import Pricing from "./pages/Pricing";
import MetalCard from "./pages/Products/MetalCard/MetalCard";
import PremiumGoldCard from "./pages/Products/MetalCard/PremiumGoldCard";
import PremiumSilverCard from "./pages/Products/MetalCard/PremiumSilverCard";
import Cart from "./pages/Cart";
import DeliveryDetails from "./pages/DeliveryDetails";
import Payment from "./pages/Payment";
import DigitalCards from "./pages/DigitalCards";
import Testimonials from "./pages/Testimonials";
import AboutUs from "./pages/AboutUs";

import SignUpPage from "./pages/Authentication/SignUpPage";
import LoginPage from "./pages/Authentication/LoginPage";
import EmailVerificationPage from "./pages/Authentication/EmailVerificationPage";
import ForgotPasswordPage from "./pages/Authentication/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Authentication/ResetPasswordPage";

import LoadingSpinner from "./components/LoadingSpinner";
import { useAuthStore } from "./store/authStore";
import PageNotFound from "./pages/PageNotFound";

// 🔐 ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!user?.isVerified) return <Navigate to="/verify-email" replace />;

  return children;
};

// 🔄 Redirect authenticated users away from login/signup
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/digital-business-cards" element={<DigitalCards />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* Product Routes */}
        <Route path="/products/metal-smart-business-card" element={<MetalCard />} />
        <Route path="/products/metal-smart-business-card/premium-gold-card" element={<PremiumGoldCard />} />
        <Route path="/products/metal-smart-business-card/premium-silver-card" element={<PremiumSilverCard />} />

        {/* Auth Pages */}
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route path="/verify-email" element={<EmailVerificationPage />} />

        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/* Protected Pages */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/delivery-details"
          element={
            <ProtectedRoute>
              <DeliveryDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
      <Toaster position="top-center" />
    </Router>
  );
}

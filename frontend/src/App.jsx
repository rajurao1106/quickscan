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
import FloatingShape from "./components/FloatingShape";

import { useAuthStore } from "./store/authStore";

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// RedirectAuthenticatedUser Component
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Main App Component
export default function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route
            path="/products/metal-smart-business-card"
            element={<MetalCard />}
          />
          <Route
            path="/products/metal-smart-business-card/premium-gold-card"
            element={<PremiumGoldCard />}
          />
          <Route
            path="/products/metal-smart-business-card/premium-silver-card"
            element={<PremiumSilverCard />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery-details" element={<DeliveryDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/digital-business-cards" element={<DigitalCards />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<AboutUs />} />

          {/* Authentication Routes */}
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

          {/* Protected Routes */}
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

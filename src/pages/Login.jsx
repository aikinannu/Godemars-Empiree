import React, { useState } from "react";
import { loginWithEmail, signInWithGoogle, resetPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginWithEmail(email, password);
      navigate("/feed");
    } catch (err) {
      setError("Invalid credentials or network error. Please try again.");
      console.error("Login error:", err);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await resetPassword(email);
      setMessage("Password reset email sent! Please check your inbox.");
      setError("");
    } catch (err) {
      console.error("Password reset error:", err);
      setError("Error sending password reset email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="w-full max-w-md bg-black/70 p-8 rounded-2xl shadow-2xl border border-yellow-600 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Welcome Back to Godemar’s Empire
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
        {message && <p className="text-green-500 text-sm text-center mb-2">{message}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-16"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-yellow-400 hover:text-yellow-300 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-yellow-500 text-sm hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>

          {/* Google Sign-In Button */}
          <button
            type="button"
            onClick={async () => {
              try {
                await signInWithGoogle();
                navigate("/feed");
              } catch (err) {
                console.error("Google Sign-In Error:", err);
                setError("Failed to sign in with Google.");
              }
            }}
            className="w-full bg-gray-800 hover:bg-gray-700 text-yellow-400 font-medium py-3 rounded-xl border border-yellow-600 transition duration-300"
          >
            Continue with Google
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            className="text-yellow-500 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
}

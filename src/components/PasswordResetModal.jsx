import React, { useState } from "react";
import { resetPassword } from "../firebase";

const PasswordResetModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await resetPassword(email);
      setMessage("✅ Password reset email sent! Check your inbox.");
      setEmail("");
    } catch (error) {
      setMessage("❌ Failed to send reset email. Please check your address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-80 z-50">
      <div className="bg-light rounded-2xl shadow-card p-8 w-[90%] max-w-md text-center">
        <h2 className="text-xl font-bold text-primary mb-2">Reset Password</h2>
        <p className="text-muted text-sm mb-4">
          Enter your registered email address. You’ll receive a link to reset
          your password.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {message && (
            <p
              className={`text-sm ${
                message.startsWith("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-accent text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-primary hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PasswordResetModal;

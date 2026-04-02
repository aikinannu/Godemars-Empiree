import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signUpWithEmail,
  loginWithEmail,
  logout as firebaseLogout,
  signInWithGoogle,
  resetPassword,
  monitorAuthState,
} from "../firebase";

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = monitorAuthState((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Signup with email
  const signup = async (email, password) => {
    const newUser = await signUpWithEmail(email, password);
    setUser(newUser);
    return newUser;
  };

  // Login with email
  const login = async (email, password) => {
    const loggedInUser = await loginWithEmail(email, password);
    setUser(loggedInUser);
    return loggedInUser;
  };

  // Login with Google
  const googleLogin = async () => {
    const googleUser = await signInWithGoogle();
    setUser(googleUser);
    return googleUser;
  };

  // Logout
  const logout = async () => {
    await firebaseLogout();
    setUser(null);
  };

  // Password reset
  const forgotPassword = async (email) => {
    await resetPassword(email);
  };

  const value = {
    user,
    loading,
    signup,
    login,
    googleLogin,
    logout,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => {
  return useContext(AuthContext);
};

// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// --- Placeholder for your authentication logic ---
// IMPORTANT: Replace this with your actual authentication check!
// How do you know if the user is logged in? Check context, local storage, etc.
const useAuth = () => {
  // Example: Check if a user token exists in local storage
  const token = localStorage.getItem('userToken'); // Adjust 'userToken' if needed
  const isAuthenticated = !!token; // True if token exists, false otherwise
  console.log("Auth Check in ProtectedRoute:", isAuthenticated); // Helpful for debugging
  return { isAuthenticated };
};
// --- End Placeholder ---


interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // User not logged in, redirect to login page
    // We save the location they were trying to access in 'state'
    // So the login page can potentially redirect them back after success
    console.log("Redirecting to login from:", location.pathname); // Debugging
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is authenticated, render the requested component
  return <>{children}</>;
};

export default ProtectedRoute;

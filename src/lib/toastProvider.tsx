"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        hideProgressBar
        autoClose={5000}
        closeButton={true}
        pauseOnHover
        theme="colored"
        limit={10}
      />
    </>
  );
}

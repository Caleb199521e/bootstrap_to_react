import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./Context/CartContext"; // Import the CartProvider

function AppWrapper() {
  return (
    <CartProvider> {/* Wrap your entire app in CartProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default AppWrapper;

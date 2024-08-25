// CartContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

// Saving Cart to local storage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Retrieve Cart from Local Storage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingIndex >= 0) {
        const newState = state.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        saveCartToLocalStorage(newState);
        return newState;
      } else {
        const newState = [...state, { ...action.payload, quantity: 1 }];
        saveCartToLocalStorage(newState);
        return newState;
      }
    case "REMOVE_ITEM":
      const newState = state.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(newState);
      return newState;
    case "UPDATE_QUANTITY":
      const updatedState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
      saveCartToLocalStorage(updatedState);
      return updatedState;
    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCartFromLocalStorage());

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  // Adding Items to Cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    setCart(
      cart.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    );
  };

  // const getCartItemCount = () => {
  //   return cart.length;
  // };

  // Updated Get Cart item
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
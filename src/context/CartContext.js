import React, { createContext, useState } from "react";
import { auth } from "../pages/login/firebase";
import { getItemShoppingCartFromFirestore } from "../pages/login/firebase";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const { user } = userCredential;
      setUser(user);

      // Fetch shopping cart items for the logged-in user
      if (user) {
        const items = await getItemShoppingCartFromFirestore(user.uid);
        setCartItems(items);
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, user, handleLogin }}>
      {children}
    </CartContext.Provider>
  );
};

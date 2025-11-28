// src/Context/ShopProvider.jsx
import { useState } from "react";
import { ShopContext } from "./ShopContextInstance";

export default function ShopProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
        // Optional: add quantity logic later
    };

    return (
        <ShopContext.Provider value={{ cart, addToCart }}>
            {children}
        </ShopContext.Provider>
    );
}
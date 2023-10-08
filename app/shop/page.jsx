"use client"

import { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { addToDb, getShoppingCart } from "@/utilities/fakedb";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id);
            if (addedProducts) {
                addedProducts.quantity = storedCart[id];
                savedCart.push(addedProducts);
            }
        }
        setCart(savedCart);
    }, [products]);

    // const handleAddToCart = (product) => {
    //     setCart([...cart, product]);
    //     addToDb(product.id)
    // }

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="md:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 w-full md:w-4/5 px-5 md:px-20">
                {products.map(product =>
                    <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        cart={cart}
                        setCart={setCart}
                    />)}
            </div>
            <div className="bg-teal-200 w-full md:w-1/5 md:min-h-screen p-4">
                <Cart cart={cart} />
            </div>
        </div>
    )
}
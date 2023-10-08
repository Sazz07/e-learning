const addToDb = id => {
    const shoppingCart = getShoppingCart();
    if (!shoppingCart[id]) {
        shoppingCart[id] = 1;
    } else {
        shoppingCart[id] += 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();

    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}

const deleteShoppingCart = () => localStorage.removeItem("shopping-cart");

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
}


const getShoppingCart = () => {
    const shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}
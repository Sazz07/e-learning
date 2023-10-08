import React from 'react'

function Cart({ cart }) {

    // let total = 0;

    // for (const product of cart) {
    //     total += product.price
    // }

    // const total = cart.reduce((prev, curr) => {
    //     const price = prev.price + curr.price;
    //     const shipping = prev.shipping + curr.shipping;
    //     return {
    //         price,
    //         shipping
    //     }
    // }, { price: 0, shipping: 0 });

    // console.log(cart);

    const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
    const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0) * totalQuantity;
    const totalShipping = cart.reduce((prev, curr) => prev + curr.shipping, 0);

    const tax = totalPrice * (7 / 100);
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='flex flex-col items-center sticky top-24'>
            <h4 className='text-2xl font-bold pb-2'>Order Summary</h4>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total price: ${totalPrice.toLocaleString()}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6 className='font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    )
}

export default Cart;
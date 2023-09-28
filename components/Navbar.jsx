import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-black text-white flex flex-col md:flex-row justify-between items-center px-20 py-6 border-b-2 border-gray-400 sticky top-0 z-50 w-full'>
            <h1 className='text-4xl font-bold'>E-commerce</h1>
            <ul className='hidden md:flex items-center gap-4 text-xl font-semibold'>
                <li>Shop</li>
                <li>Order</li>
                <li>Inventory</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

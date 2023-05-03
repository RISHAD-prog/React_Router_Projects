import React from 'react';
import './AddedCart.css'
import { TrashIcon } from '@heroicons/react/24/solid'
const AddedCart = ({ Cart, handleClearCart, children }) => {

    let Total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const cart of Cart) {
        quantity = quantity + cart.quantity;
        Total = cart.price * cart.quantity + Total;
        shipping = cart.shipping * cart.quantity + shipping;

    }
    const tax = Total * 7 / 100;
    const grandTotal = Total + shipping + tax;
    return (
        <div className='cart'>
            <h3> Order Summary </h3>
            <p>Quantity: {quantity}</p>
            <p>Price:${Total} </p>
            <p>Shipping:${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Total cost:${grandTotal}</p>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart </span>
                <TrashIcon className='clear-icon' />
            </button>
            {children}
        </div>
    );
};

export default AddedCart;
import React, { useState } from 'react';
import './Order.css';
import AddedCart from '../addedcart/AddedCart';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../reviewItem/ReviewItem';

const Order = () => {
    const order = useLoaderData();
    const [cart, setCart] = useState(order);
    const deleteItem = (id) => {
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop'>
            <div className='order-items'>

                {
                    cart.map(item => <ReviewItem
                        key={item.id}
                        Items={item}
                        DeleteItem={deleteItem}
                    >
                    </ReviewItem>)
                }

            </div>
            <div>
                <AddedCart
                    Cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to='/checkout'>
                        <button>Proceed Checkout</button>
                    </Link>
                </AddedCart>
            </div>
        </div>
    );
};

export default Order;
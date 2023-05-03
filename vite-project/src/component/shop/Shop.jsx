import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import AddedCart from '../addedcart/AddedCart';
import Product from '../product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [items, setItem] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    useEffect(() => {
        const getData = getShoppingCart();
        const addData = [];
        for (const id in getData) {
            const getCartData = items.find(data => data.id === id);
            if (getCartData) {
                const quantity = getData[id];
                getCartData.quantity = quantity;
                addData.push(getCartData);
            }
        }
        setCart(addData);

    }, [items])
    const handleAddtoCart = (product) => {
        let addProduct = [];
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            product.quantity = 1;
            addProduct = [...cart, product];
        }
        else {
            exist.quantity = exist.quantity + 1;
            const updateData = cart.filter(pd => pd.id !== product.id);
            addProduct = [...updateData, product];
        }
        setCart(addProduct);
        addToDb(product.id);


    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop'>
            <div className='items'>
                {
                    items.map(item =>
                        <Product
                            handleAddtoCart={handleAddtoCart}
                            Item={item}
                            key={item.id}
                        ></Product>
                    )
                }
            </div>

            <div >
                <AddedCart
                    Cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to='/order'>
                        <button>Review Order</button>
                    </Link>
                </AddedCart>
            </div>
        </div>
    );
};

export default Shop;
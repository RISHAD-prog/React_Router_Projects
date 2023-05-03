import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const { name, img, category, price, ratings, seller } = props.Item;
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='product-name' >{name}</h2>
                <p >Price: {price}</p>
                <p>Category: {category}</p>
                <p>Ratings: {ratings}</p>
                <p>Brand: {seller} </p>
                <button onClick={() => handleAddtoCart(props.Item)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

            </div>
        </div>

    );
};

export default Product;
import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ Items, DeleteItem }) => {
    return (
        <div className='review-item'>
            <img src={Items.img} alt="" />
            <div className='order-item'>
                <p className='product-title'>{Items.name}</p>
                <p>Price:${Items.price}</p>
                <p>Quantity:{Items.quantity}</p>
            </div>
            <button onClick={() => DeleteItem(Items.id)} className="button-delete"><TrashIcon className='delete-icon' /></button>
        </div>
    );
};

export default ReviewItem;
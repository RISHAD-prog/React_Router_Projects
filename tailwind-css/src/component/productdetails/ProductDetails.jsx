import React from 'react';

const ProductDetails = ({ Items }) => {
    return (
        <div className='bg-slate-900 text-white'>
            <p>Product:{Items.name}</p>
            <h1 className='text-4xl'>${Items.price}</h1>
            <p>Color:{Items.features.color}</p>
            <p>The work of rechart is still not tried</p>
            <button className='rounded-full bg-orange-500 text-black min-w-full mb-0'>Add to cart</button>

        </div>
    );
};

export default ProductDetails;
import React, { useEffect, useState } from 'react';
import ProductDetails from '../productdetails/ProductDetails';

const Products = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1 className='text-6xl bg-slate-900 text-white p-4'>New and available products</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-6'>
                {
                    products.map(product => <ProductDetails
                        key={product.id}
                        Items={product}
                    ></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default Products;
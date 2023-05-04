import React from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';
const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <p>All category News</p>
            {
                id && categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                >

                </NewsCard>)
            }
        </div>
    );
};

export default Category;
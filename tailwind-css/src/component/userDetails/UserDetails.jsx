import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetail = useLoaderData();
    console.log(userDetail);
    return (
        <div>
            <h1>Here you can see use details.</h1>
        </div>
    );
};

export default UserDetails;
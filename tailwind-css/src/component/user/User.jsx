import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ User }) => {
    const { name, username, email, id } = User;
    return (
        <div className='border-solid border-2 border-sky-500 '>
            <h1>Name{name}</h1>
            <h2>Username:{username}</h2>
            <h3>Email:{email}</h3>
            <Link to={`/about/${id}`} >User Details</Link>
        </div>
    );
};

export default User;
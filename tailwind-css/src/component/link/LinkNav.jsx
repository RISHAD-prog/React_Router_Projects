import React from 'react';
import { Link } from 'react-router-dom';

const LinkNav = ({ Route }) => {
    return (
        <div className=' md:mr-3'>
            <Link to={`${Route.path}`} >{Route.name}</Link>
        </div>
    );
};

export default LinkNav;
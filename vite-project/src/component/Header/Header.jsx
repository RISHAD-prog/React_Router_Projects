import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(Authcontext);
    const handleSignout = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                alert(error.message);
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="Company Logo" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign Up</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user &&

                    <span className='text-white' >{user.email} <button onClick={handleSignout} >Sign Out</button></span>

                }
            </div>
        </nav >
    );
};

export default Header;
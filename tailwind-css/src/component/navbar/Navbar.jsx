import React, { useState } from 'react';
import './Navbar.css';
import { list } from 'postcss';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import LinkNav from '../link/LinkNav';
const Navbar = () => {
    const [open, setOpen] = useState(false)


    const data = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Student", path: "/student" },
        { id: 4, name: "Teacher", path: "/teacher" },
        { id: 5, name: "Contact", path: "/contact" }
    ];

    return (
        <nav >
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>{open ?
                    <XMarkIcon className="h-6 w-6 text-blue-500" />
                    : <Bars4Icon className="h-6 w-6 text-blue-500" />}</span>

            </div>
            <div className={`md:static absolute duration-100 ${open ? 'top-6' : '-top-36'}`}>
                {
                    <ul className='md:flex'>
                        {
                            data.map(route => <LinkNav
                                Key={route.id}
                                Route={route}
                            ></LinkNav>)
                        }
                    </ul>
                }
            </div>


        </nav>
    );
};

export default Navbar;
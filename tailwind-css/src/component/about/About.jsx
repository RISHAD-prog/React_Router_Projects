import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';

const About = () => {
    const contact = useLoaderData();
    console.log(contact);
    return (
        <div >
            <h1>This is about page. Total user is {contact.length}</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    contact.map(user => <User
                        key={user.id}
                        User={user}
                    ></User>)
                }

            </div>

        </div>
    );
};

export default About;
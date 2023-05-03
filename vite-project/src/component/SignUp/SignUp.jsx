import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(Authcontext);
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const conpassword = form.conpassword.value;

        if (password !== conpassword) {
            alert("password did not match");
            return;
        }
        else if (password.length < 6) {
            alert("password must be greater than 6 character");
            return;
        }
        createUser(email, password)
            .then(result => {
                form.reset();
            })
            .catch(error => {
                alert(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title' >Sign Up</h1>
            <form onSubmit={handleSignUp} className="form-control">
                <label className="email">Email</label><br />
                <input type="email" name="email" id="" /> <br />
                <label className="password">Password</label><br />
                <input type="password" name="password" id="" /><br />
                <label className="Confirm_Password">Confirm Password</label><br />
                <input type="password" name="conpassword" id="" /><br />
                <button type="submit">Sign Up</button>
                <p>Already have an account?Go to <Link to="/login">Login</Link> </p>
            </form>
        </div>
    );
};

export default SignUp;
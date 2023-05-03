import React, { useContext } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
const Login = () => {
    const { signIn } = useContext(Authcontext);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length === 0) {
            alert("password provide a password");
            return;
        }
        signIn(email, password)
            .then(result => {
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                alert(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title' >Login</h1>
            <form onSubmit={handleLogin} className="form-control">
                <label className="email">Email</label><br />
                <input type="email" name="email" id="" /> <br />
                <label className="password">Password</label><br />
                <input type="password" name="password" id="" /><br />
                <button type="submit">Login</button>
                <p>New to Ema-John?Go to <Link to="/signUp" >Sign Up</Link> </p>
            </form>
        </div>
    );
};

export default Login;
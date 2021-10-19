import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

function Register() {
    const history = useHistory();
    const {userCreateWithEmail, signInWithEmail, signInWithGoogle, user} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);
// -------------------//
    const location = useLocation();
    const redirect_url = location.state?.from || "/"
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }

    const handleRegistation = (e) => {
        e.preventDefault();
        if(password.length < 6) {
            setError("Password must be 6 characters.");
            return;
        }
        setEmail('')
        setPassword('')
        // userCreateWithEmail(email, password)
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }

    const processLogin = (email, password) => {
        signInWithEmail(email, password)
    }

    const createNewUser = (email, password) => {
        userCreateWithEmail(email, password)
    }

    return (
        <div className="login">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleRegistation} className="card">
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" value={email} onChange={handleEmail} className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-4 col-form-label ">Password</label>
                    <div className="col-sm-10">
                        <input type="password" value={password} onChange={handlePassword} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" for="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                {
                    isLogin ? <button type="submit" className="btn btn-primary">Login</button> : <button type="submit" className="btn btn-primary">Register</button>
                }
            </form>
            {/* Login Comp */}
            <div className="loginBtn">
                <p>------------or-----------</p>
                <button onClick={handleGoogleLogin} type="button" className="googleBtn">Google Login</button>
            </div>


        </div>
    )
}

export default Register;

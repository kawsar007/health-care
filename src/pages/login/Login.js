import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import "../../css/utilities.css";
import useAuth from '../../hooks/useAuth';
import './Login.css';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const history = useHistory();
    const location = useLocation();
    const { signInWithGoogle, user } = useAuth();
    const redirect_url = location.state?.from || "/"
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    console.log(user, "User");
    return (
        <div className="login">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="email" {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input defaultValue="" placeholder="password" {...register("password")} />

                <input className="submit" type="submit" />
            </form>
            <div className="loginBtn">
                <p>New a MedicalPress ? <Link to="register">Create account</Link> </p>
                <p>------------or-----------</p>
                <button onClick={handleGoogleLogin} type="button" className="googleBtn">Google Login</button>
            </div>

        </div>
    )
}

export default Login;

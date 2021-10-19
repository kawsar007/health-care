import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="login">
            <h2>Register</h2>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

               <input defaultValue="" placeholder="username" {...register("username")} />


                <input placeholder="email" {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input defaultValue="" placeholder="password" {...register("password")} />

                <input className="submit" type="submit" />
            </form>
            <div className="loginBtn">
                <p>Already have an account? <Link to="login">Login</Link> </p>
               
            </div>

        </div>
    )
}

export default Register;

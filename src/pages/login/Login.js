import React from 'react';
import useAuth from '../../hooks/useAuth';

function Login() {
    const {signInWithGoogle, user} = useAuth();
    console.log(user, "User");
    return (
        <div>
            <button onClick={signInWithGoogle} type="button">Google Login</button>
        </div>
    )
}

export default Login;

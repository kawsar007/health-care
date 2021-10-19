import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

function Login() {
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
        <div>
            <form>
                <input type="email" className="form-control" placeholder="Emain"/>
                <input type="password" className="form-control" placeholder="Password"/>
                <input type="submit" />
            </form>
            <button onClick={handleGoogleLogin} type="button">Google Login</button>
        </div>
    )
}

export default Login;

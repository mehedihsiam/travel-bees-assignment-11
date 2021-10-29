import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const { signinWithGoogle, setUser, setIsLoading } = useAuth()


    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signinWithGoogle()
            .then(result => {
                setIsLoading(true);
                const loggedInUser = result.user;
                setUser(loggedInUser);
                history.push(url);

            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div>
            <div className="btn-popup mx-auto my-auto text-center">
                <button onClick={handleGoogleLogin} className="btn btn-warning">Sign Up With Google</button>
                <p>Already Have Account? <br /> <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Register;
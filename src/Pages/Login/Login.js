import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {

	const {signInUsingGoogle, logOut,user} = useAuth();
	const history = useHistory();

	const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push('/home');
            })
    }

	return (
		<div>
			<button onClick={handleGoogleLogin}>Login with google</button>
			<h1>Hello mr {user.displayName}</h1> <br />
			<button onClick={logOut}>Logout</button>
		</div>
	);
};

export default Login;
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


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
			<div className="container my-5 py-5 login-section">
				<h1 className="text-center fw-bold">
					Login With
				</h1>
				<div className="text-center my-5">
				<button className="btn btn-light bg-transparent border border-3 rounded-pill px-5 py-2" onClick={handleGoogleLogin}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" className="me-2" width="30" alt=""/> Login With Google </button>
				<p className="my-2">Don't have an account? <Link to="#">Create an account</Link></p>
				</div>

			</div>
		</div>
	);
};

export default Login;
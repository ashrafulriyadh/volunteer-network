import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../logos/logo.png';

const Header = () => {

  const {user,logOut} = useAuth();

	return (
		<div>
			<div className="navigation">
			<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
 <div className="container">
    <Link className="navbar-brand" to="/home"><img className="img-fluid my-3 logo" src={logo} alt="logo" width="160" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav fs-5">
	  <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
		<li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/donation">Donation</Link>
        </li>
	  <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
        </li>
		<li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
        </li>
		{
      !user.displayName &&
      <li className="nav-item">
          <Link className="nav-link btn btn-info text-white mx-3 px-4" aria-current="page" to="/login">Login</Link>
        </li>
    }
    {
      user.displayName &&
      <li className="nav-item">
          <Link className="nav-link mx-3 fs-5" aria-current="page" to="#">Signed as {user.displayName}</Link>
        </li>
    }
    {
      user.displayName &&
      <li className="nav-item">
          <Link className="nav-link btn btn-info  text-white mx-1 px-3" aria-current="page" to="#" onClick={logOut}>LogOut</Link>
        </li>
    }
		<li className="nav-item">
          <Link className="nav-link btn btn-dark text-white mx-3 px-4" aria-current="page" to="/admin">Admin</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
			</div>
		</div>
	);
};

export default Header;
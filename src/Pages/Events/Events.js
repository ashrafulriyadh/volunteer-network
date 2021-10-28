import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = ({myevent}) => {

	const {_id,name,img} = myevent;

	const bg = [
		"primary",
		"secondary",
		"danger",
		"success",
		"info",

	];

	const randomBg = bg[Math.floor(Math.random() * 5)];


	return (
		<div>
			<div className="col">
	<Link to={`/register/${name}`}>
	<div className="card shadow-lg  h-100">
  <img src={img} class="card-img-top" alt="..."/>
  <div className={`card-body text-center bg-${randomBg}`}>
    <p className="card-title text-white">{name}</p>
  </div>
</div>
	</Link>
			</div>
		</div>
	);
};

export default Events;
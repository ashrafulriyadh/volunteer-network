import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Shared/Header/Header';
import Events from '../Events/Events';

const Home = () => {

	const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

	return (
		<div>
			<div className="top-banner">
			</div>
			<Header></Header>
			<section>
			<div className="container mt-5 pt-5">
				<h1 className="text-uppercase fw-bold text-center">i grow by helping people in need.</h1>
				</div>
				<div className="container d-flex justify-content-center">
				<div className="input-group input-group-lg w-50 mt-4">
  <input placeholder="Search.." type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  <button className="input-group-text btn btn-info text-white" id="inputGroup-sizing-lg">Search</button>
</div>
       </div>
			</section>

			<section>
				<div className="container my-5">
				<div className="row row-cols-4">
					{
						events.map(myevent => <Events key={myevent._id} myevent ={myevent}></Events> )
					}
				</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
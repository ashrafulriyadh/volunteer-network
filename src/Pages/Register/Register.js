import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Register = () => {

	const {myeventId} = useParams();

	const {register,handleSubmit, reset} = useForm();

	const onSubmit = data => {
		console.log(data);

        axios.post('https://blooming-thicket-33498.herokuapp.com/volunteer', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
	}

	return (
		<div>
			<div className="container my-5">
			<h1 className="text-center">
				Register as a volunteer
			</h1>
			</div>
			<div className="container">
			<form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-3" {...register("name")} placeholder="Full Name" />
                <input type="email" className="form-control mb-3" {...register("email")} placeholder="Email" />
				<input className="form-control mb-3" type="date" {...register("date")} />
                <textarea className="form-control mb-3" {...register("description")} placeholder="Description" />
				<input className="form-control mb-3" type="text" {...register("title")} value={myeventId} />
                <input className="btn btn-primary"  type="submit" />
            </form>
			</div>
		</div>
	);
};

export default Register;
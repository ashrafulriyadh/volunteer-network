import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddEvent = () => {

	const {register, handleSubmit, reset} = useForm();

	const onSubmit = data => {
		console.log(data);

        axios.post('https://blooming-thicket-33498.herokuapp.com/events', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
	}

	return (
		<div>
			<section>
				<div className="container">
				<h1 className="text-center my-5"> Add Event </h1>
				</div>

				<div className="container">
				<form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-3" {...register("name")} placeholder="Name" />
                <textarea className="form-control mb-3" {...register("description")} placeholder="Description" />
				<input className="form-control mb-3" type="date" {...register("date")} />
                <input className="form-control mb-3" {...register("img")} placeholder="image url" />
                <input className="btn btn-primary"  type="submit" />
            </form>
				</div>
			</section>
		</div>
	);
};

export default AddEvent;
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Course.css";

const Course = (props) => {
	const course = props.course;
	const [cart, setCart] = useState([]);

	const handleAddCourse = (singleCourse) => {
		const newCart = [...cart, singleCourse];
		setCart(newCart)
	}
	return (
		<div className="course-main">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="course-box">
							{course.map((singleCourse) => (
								<div key={singleCourse.id} className="single-course">
									<img
										src={singleCourse.picture}
										alt="Course banner"
									/>
									<h2>{singleCourse.courseTitle}</h2>
									<p className="author">
										{singleCourse.teacher}
									</p>
									<p className="course-price">
										${singleCourse.price}
									</p>
									<button
										onClick={()=>handleAddCourse(singleCourse)}
									>
										Enroll Now
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="col-md-4">
						<Cart cart={cart}></Cart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;

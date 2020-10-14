import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Course from "./components/Course/Course";

import courseData from "../src/data/coursedata.json";

function App() {
	const [course, setCourse] = useState([]);

	useEffect(() => {
		setCourse(courseData);
	}, []);


	return (
		<div className="main">
			<Header></Header>
			<Banner></Banner>
			<Course course={course}></Course>
			<Footer></Footer>
		</div>
	);
}

export default App;

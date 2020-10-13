import React from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../logo.png";

const Header = () => {
	return (
		<header className="header-main">
			<Container>
				<Row>
					<Col md={2}>
						<div className="site-logo">
							<img src={Logo} alt="Logo" />
						</div>
					</Col>
					<Col
						md={8}
						className="d-flex align-items-center justify-content-center"
					>
						<div className="site-navigation">
							<ul>
								<li>
									<a href="#course">Courses</a>
								</li>
								<li>
									<a href="#programs">Programs</a>
								</li>
								<li>
									<a href="#schools">Schools & partners</a>
								</li>
								<li>
									<a href="#blog">Blog</a>
								</li>
								<li>
									<a href="#contact">Contact us</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col
						md={2}
						className="d-flex align-items-center justify-content-end"
					>
						<div className="sign-up">
							<a href="#login">Login</a>
							<a href="#signup" className="sign-up-action">
								Sign up
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default Header;

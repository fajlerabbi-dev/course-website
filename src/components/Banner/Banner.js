import React from 'react';
import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
const Banner = () => {
    return (
        <div className="banner-main">
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to course Deep learning platform </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
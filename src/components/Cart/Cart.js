import React from "react";
import "./Cart.css";

const Cart = (props) => {
	const cart = props.cart;
	const totalPrice = cart.reduce( (sum, course) => sum + Number(course.price), 0);

	return (
		<div className="course-cart">
			<h4>Checkout</h4>
			<p className="total-enroll">You enrolled {cart.length} items</p>
			<p className="total-price">Total price: ${Number(totalPrice)}</p>
			<button className="checkout">Checkout</button>
		</div>
	);
};

export default Cart;

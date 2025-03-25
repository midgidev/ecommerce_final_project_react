import { useState } from 'react'
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from '../../reducers/CartSlice.jsx'; // Assuming you have action creators for increasing and decreasing item quantity

import './Home.css'

function Home() {
	const dispatch = useDispatch();
	const cartItems = useSelector(state=>state.cart.cartItems);
	let navigate =useNavigate();
	return (
		<>
			<div className="bg-nursery">
				<div className="overlay d-flex align-items-center justify-content-center">
					<div className="container text-light">
						<div className="row">
							<div className="col-sm-4 d-flex align-items-center justify-content-center flex-column">
								<h1>Green Haven Nursery</h1>
								<hr className={'w-25'}/>
								<h6><small>Your green space for all kinds of plants and flowers</small></h6>
								<button type="button" className={'btn btn-success mt-4'} onClick={()=>navigate('/products')}>Get Started</button>
							</div>
							<div className="col-sm-8">
								<h6>Welcome to Green Haven Nursery</h6>
								<p>At Green Haven Nursery, we believe a home without plants is a home without life. Our mission is to provide you with a unique experience where you can find the best variety of plants, flowers, and trees to transform your space into a true natural haven.</p>

								<p>We invite you to get to know us and visit our nursery, where our team of experts will be happy to assist you in choosing the perfect plant, whether it's for your garden, office, or any special corner that needs a green touch.</p>
								<p>With over 10 years of experience, we take pride in offering the highest quality products and personalized service because we understand that each customer is unique, and every plant has a story to tell. Come and find the plant of your dreams with us!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

import { useState } from 'react'
import { useNavigate } from "react-router";

import './Cart.css'
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity} from "../../reducers/CartSlice.jsx";

import products from '../../config/db/products.jsx'
import {toTitleCase} from "../../util/string.util.jsx";
import {currencyFormat} from "../../util/currency.util.jsx";
import CartItem from "./cart-item/CartItem.jsx";

function Cart() {
	const dispatch = useDispatch();
	console.log("productos: ", products)
	let navigate= useNavigate();
	const cartItems = useSelector(state => state.cart.cartItems);
	const getProduct = (productId) => {
		return products.find(p=>p.id === productId);
	}
	const totalAmount = cartItems.reduce((prev, curr) => {
		const product = products.find(p=>p.id === curr.id);
		return prev + curr.quantity * product.price;
	}, 0);
	return (
		<>
			<div className="container mt-5">
				<h4 className="text-center">Total Cart Amount: {currencyFormat(totalAmount)}</h4>
				{cartItems.map((cartItem)=>
					<div className="cart-item-wrapper mb-2">
						<CartItem key={cartItem.id}
							title={getProduct(cartItem.id).name}
							price={getProduct(cartItem.id).price}
							imgSrc={getProduct(cartItem.id).image}
							nItems={cartItem.quantity}
							total={getProduct(cartItem.id).price * cartItem.quantity}
							onDelete={()=>dispatch(removeItemFromCart(cartItem.id))}
							onAdd={()=>dispatch(increaseItemQuantity(cartItem.id))}
							onRemove={()=>dispatch(decreaseItemQuantity(cartItem.id))}
							/>
					</div>
				)}
				<div className="d-flex justify-content-center flex-column align-items-center">
					<button className={'btn btn-success fit-content mt-2'} onClick={() => navigate('/products')}>Continue Shopping</button>
					<button className={'btn btn-success fit-content mt-2'} onClick={() => alert('Feature not implemented')}>Checkout</button>
				</div>
			</div>
		</>
	)
}

export default Cart

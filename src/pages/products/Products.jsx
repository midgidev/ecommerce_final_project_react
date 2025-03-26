import { useState } from 'react'
import { useNavigate } from "react-router";

import './Products.css'
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../reducers/CartSlice.jsx";
import Card from "../../components/card/Card.jsx";
import products from '../../config/db/products.jsx'
import {toTitleCase} from "../../util/string.util.jsx";

function Products() {
	const dispatch = useDispatch();
	console.log("productos: ", products)
	let navigate= useNavigate();
	const cartItems = useSelector(state => state.cart.cartItems);
	const isProductInCart = (productId)=>{
		return cartItems.find(p=>p.id === productId);
	}
	return (
		<>
			<div className="container mt-5">
				<div className="row g-3">
					{
						products.map(product=>
							<div  className="col-sm-12 col-md-6 col-lg-3 card-wrapper">
								<Card
									key={product.id}
									title={toTitleCase(product.name)}
									text={product.description}
									imgSrc={product.image}
									btnText={isProductInCart(product.id)?'Added':'Add to cart'}
									disabled={isProductInCart(product.id)}
									onClick={()=>!isProductInCart(product.id)?dispatch(addItemToCart({id: product.id, quantity: 1})):null}
								></Card>
							</div>
						)
					}
				</div>
			</div>
		</>
	)
}

export default Products

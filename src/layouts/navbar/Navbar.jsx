import { useState } from 'react'
import {Outlet, useNavigate} from "react-router";
import './Navbar.css'
import icon from '../../assets/images/icon.png'
import {useDispatch, useSelector} from "react-redux";

function Navbar() {
	let navigate= useNavigate();
	const dispatch = useDispatch();
	const cartItems = useSelector(state=>state.cart.cartItems);
	const nCartItems = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
	return (
		<>
			<nav className="navbar text-light">
				<div className="container-md">
					<div className="row w-100">
						<div className="col-sm-4">
							<a className="navbar-brand text-light" href="#" onClick={()=>navigate('/')}>
								<img className={'me-2'} src={icon} alt="icon" width={40} height={40}/>
								<span>Green Haven Nursery</span>
							</a>
						</div>

						<div className="col-sm-4 d-flex flex-column align-items-center justify-content-center">
							<a className="text-light fs-5 text-decoration-none"><span className="nav-link">Plants</span></a>
						</div>
						<div className="col-sm-4 d-flex flex-column align-items-end justify-content-center fs-5">
							<div className="nav-link" onClick={()=>{console.log("hola");navigate('/cart')}}>
								<i className="fa-solid fa-cart-shopping" >

								</i>
								{nCartItems > 0 && <span className="position-absolute translate-middle badge rounded-pill bg-danger">
								    {nCartItems}
								    <span className="visually-hidden">unread messages</span>
								  </span>}
							</div>
						</div>
					</div>
				</div>

			</nav>
			<Outlet/>
		</>
	)
}

export default Navbar

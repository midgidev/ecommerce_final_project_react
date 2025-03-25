import './CartItem.css'
import {currencyFormat} from "../../../util/currency.util.jsx";

function CartItem(props){
	const title = props.title;
	const price = props.price;
	const imgSrc = props.imgSrc;
	const nItems = props.nItems;
	const total = props.total;
	const onDelete = props.onDelete;
	const onAdd = props.onAdd;
	const onRemove = props.onRemove;
	return (<>
		<div className="h-100 d-flex flex-row gy-2" style={{width: '100%'}}>
			<div className="cart-image-wrapper me-4">
				<img src={imgSrc} className="cart-image" alt="..."/>
			</div>
			<div className="cart-details d-flex flex-column">
				<h6 className="mb-1">{title}</h6>
				<span>{currencyFormat(price)}</span>
				<div className="d-flex flex-row mb-1">
					<button className="btn btn-outline-success btn-sm inc-dec-btn me-2" onClick={onRemove}>-</button>
					<span>{nItems}</span>
					<button className="btn btn-outline-success btn-sm inc-dec-btn ms-2" onClick={onAdd}>+</button>
				</div>
				<span><strong>Total: {currencyFormat(total)}</strong></span>
				<button className="btn btn-danger mt-2" onClick={onDelete}>Delete</button>
			</div>
		</div>
	</>)
}
export default CartItem;

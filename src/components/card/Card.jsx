import './Card.css'

function Card(props){
	const title = props.title;
	const text = props.text;
	const imgSrc = props.imgSrc;
	const btnText = props.btnText;
	const onClick = props.onClick;
	return (<>
		<div className="card h-100" style={{width: '100%'}}>
			<img src={imgSrc} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<button href="#" onClick={onClick} className="btn btn-primary float-end">{btnText}</button>
			</div>
		</div>
	</>)
}
export default Card;

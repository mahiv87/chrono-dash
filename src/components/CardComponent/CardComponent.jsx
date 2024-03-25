import elipsis from '../../images/icon-ellipsis.svg';

function CardComponent() {
	return (
		<div>
			<div>
				<p>Work</p>
				<a href="#">
					<img src={elipsis} alt="" />
				</a>
			</div>
			<p>32hrs</p>
			<p>Last Week - 36hrs</p>
		</div>
	);
}

export default CardComponent;

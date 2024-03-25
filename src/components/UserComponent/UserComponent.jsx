import avatar from '../../images/image-jeremy.png';

function UserComponent() {
	return (
		<div>
			<img src={avatar} alt="User avatar" />
			<p>Report for</p>
			<p>Jeremy Robson</p>
		</div>
	);
}

export default UserComponent;

import styles from '../UserComponent/UserComponent.module.css';
import avatar from '../../images/image-jeremy.png';

function UserComponent() {
	return (
		<div className={styles.container}>
			<img src={avatar} alt="User avatar" className={styles.avatar} />
			<p>Report for</p>
			<p>Jeremy Robson</p>
		</div>
	);
}

export default UserComponent;

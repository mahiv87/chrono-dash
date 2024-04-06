import styles from '../UserComponent/UserComponent.module.css';
import avatar from '../../images/image-jeremy.png';
import { useState } from 'react';

function UserComponent() {
	const [isActive, setIsActive] = useState(true);

	return (
		<div className={styles.container}>
			<div className={styles.userContainer}>
				<img src={avatar} alt="User avatar" className={styles.avatar} />
				<div className={styles.userInfo}>
					<p>Report for</p>
					<p className={styles.name}>Jeremy Robson</p>
				</div>
			</div>
			<ul className={styles.periodic}>
				<li>Daily</li>
				<li>Weekly</li>
				<li>Monthly</li>
			</ul>
		</div>
	);
}

export default UserComponent;

// className={isActive ? styles.active : ''}
// 					onClick={() => setIsActive(!isActive)}

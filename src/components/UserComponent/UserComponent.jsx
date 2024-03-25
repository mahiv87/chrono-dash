import styles from '../UserComponent/UserComponent.module.css';
import avatar from '../../images/image-jeremy.png';
import { useState } from 'react';

function UserComponent() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.userContainer}>
				<img src={avatar} alt="User avatar" className={styles.avatar} />
				<div className={styles.userInfo}>
					<p>Report for</p>
					<p className={styles.name}>Jeremy Robson</p>
				</div>
			</div>
			<div className={styles.periodic}>
				<p>Daily</p>
				<p
					className={isActive ? styles.active : ''}
					onClick={() => setIsActive(!isActive)}
				>
					Weekly
				</p>
				<p>Monthly</p>
			</div>
		</div>
	);
}

export default UserComponent;

import { useState } from 'react';

import styles from '../UserComponent/UserComponent.module.css';
import avatar from '../../images/image-jeremy.png';

function UserComponent() {
	const [activeItem, setActiveItem] = useState(null);

	const handleClick = (index) => {
		setActiveItem(index);
	};

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
				<li
					style={{
						color: activeItem === 0 ? 'white' : ''
					}}
					className={styles.item}
					onClick={() => handleClick(0)}
				>
					Daily
				</li>
				<li
					style={{
						color: activeItem === 1 ? 'white' : ''
					}}
					className={styles.item}
					onClick={() => handleClick(1)}
				>
					Weekly
				</li>
				<li
					style={{
						color: activeItem === 2 ? 'white' : ''
					}}
					className={styles.item}
					onClick={() => handleClick(2)}
				>
					Monthly
				</li>
			</ul>
		</div>
	);
}

export default UserComponent;

// className={isActive ? styles.active : ''}
// 					onClick={() => setIsActive(!isActive)}

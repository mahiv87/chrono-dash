import { useState, useEffect } from 'react';

import styles from '../UserComponent/UserComponent.module.css';
import avatar from '../../images/image-jeremy.png';

function UserComponent() {
	const [activeItem, setActiveItem] = useState(1);

	const handleClick = (index) => {
		setActiveItem(index);
		localStorage.setItem('period', index.toString());
	};

	useEffect(() => {
		const storedActiveItem = localStorage.getItem('period');
		if (storedActiveItem !== null) {
			setActiveItem(parseInt(storedActiveItem));
		}
	}, []);

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
					className={
						activeItem === 0 ? `${styles.item} ${styles.active}` : styles.item
					}
					onClick={() => handleClick(0)}
				>
					Daily
				</li>
				<li
					className={
						activeItem === 1 ? `${styles.item} ${styles.active}` : styles.item
					}
					onClick={() => handleClick(1)}
				>
					Weekly
				</li>
				<li
					className={
						activeItem === 2 ? `${styles.item} ${styles.active}` : styles.item
					}
					onClick={() => handleClick(2)}
				>
					Monthly
				</li>
			</ul>
		</div>
	);
}

export default UserComponent;

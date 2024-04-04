import styles from '../CardComponent/CardComponent.module.css';
import icon from '../../images/icon-work.svg';
import elipsis from '../../images/icon-ellipsis.svg';

function CardComponent() {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={icon} alt="icon" className={styles.icon} />
			</div>
			<div className={styles.activityInfo}>
				<div className={styles.header}>
					<p className={styles.title}>Work</p>
					<a href="#">
						<img src={elipsis} alt="elipsis" className={styles.elipsis} />
					</a>
				</div>
				<div className={styles.timeContainer}>
					<p className={styles.time}>32hrs</p>
					<p className={styles.previous}>Last Week - 36hrs</p>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;

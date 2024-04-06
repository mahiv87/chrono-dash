import PropTypes from 'prop-types';

import styles from '../CardComponent/CardComponent.module.css';
import workIcon from '../../images/icon-work.svg';
import playIcon from '../../images/icon-play.svg';
import studyIcon from '../../images/icon-study.svg';
import exerciseIcon from '../../images/icon-exercise.svg';
import socialIcon from '../../images/icon-social.svg';
import selfIcon from '../../images/icon-self-care.svg';
import elipsis from '../../images/icon-ellipsis.svg';

function CardComponent({ color, title, time, previous }) {
	return (
		<div style={{ backgroundColor: `${color}` }} className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={workIcon} alt="icon" className={styles.icon} />
			</div>
			<div className={styles.activityInfo}>
				<div className={styles.header}>
					<p className={styles.title}>{title}</p>
					<a href="#">
						<img src={elipsis} alt="elipsis" className={styles.elipsis} />
					</a>
				</div>
				<div className={styles.timeContainer}>
					<p className={styles.time}>{time}hrs</p>
					<p className={styles.previous}>Last Week - {previous}hrs</p>
				</div>
			</div>
		</div>
	);
}

CardComponent.propTypes = {
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	previous: PropTypes.string.isRequired
};

export default CardComponent;

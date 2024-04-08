import PropTypes from 'prop-types';

import styles from '../CardComponent/CardComponent.module.css';
import workIcon from '../../images/icon-work.svg';
import playIcon from '../../images/icon-play.svg';
import studyIcon from '../../images/icon-study.svg';
import exerciseIcon from '../../images/icon-exercise.svg';
import socialIcon from '../../images/icon-social.svg';
import selfIcon from '../../images/icon-self-care.svg';
import elipsis from '../../images/icon-ellipsis.svg';

function CardComponent({ activePeriod, color, title, timeframes }) {
	const current = timeframes[activePeriod].current;
	const previous = timeframes[activePeriod].previous;

	console.log(`CardComponent: ${activePeriod}`);

	const handleIcon = (name) => {
		switch (name) {
			case 'Work':
				return workIcon;
			case 'Play':
				return playIcon;
			case 'Study':
				return studyIcon;
			case 'Exercise':
				return exerciseIcon;
			case 'Social':
				return socialIcon;
			case 'Self Care':
				return selfIcon;
			default:
				return workIcon;
		}
	};

	return (
		<div style={{ backgroundColor: `${color}` }} className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={handleIcon(title)} alt="icon" className={styles.icon} />
			</div>
			<div className={styles.activityInfo}>
				<div className={styles.header}>
					<p className={styles.title}>{title}</p>
					<a href="#">
						<img src={elipsis} alt="elipsis" className={styles.elipsis} />
					</a>
				</div>
				<div className={styles.timeContainer}>
					<p className={styles.time}>{current}hrs</p>
					<p className={styles.previous}>Last Week - {previous}hrs</p>
				</div>
			</div>
		</div>
	);
}

CardComponent.propTypes = {
	activePeriod: PropTypes.oneOf(['daily', 'weekly', 'monthly']),
	color: PropTypes.string,
	title: PropTypes.string,
	timeframes: PropTypes.object
};

export default CardComponent;

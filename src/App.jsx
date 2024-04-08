// import { useState, useEffect } from 'react';
// import './App.css';
// import UserComponent from './components/UserComponent/UserComponent';
// import CardComponent from './components/CardComponent/CardComponent';
// import data from './db/data.json';

// function App() {
// 	const [activeItem, setActiveItem] = useState(1);

// 	useEffect(() => {
// 		const storedActiveItem = localStorage.getItem('period');
// 		if (storedActiveItem !== null) {
// 			setActiveItem(parseInt(storedActiveItem));
// 		}
// 	}, []);

// 	console.log(`App: ${activeItem}`);

// 	return (
// 		<>
// 			<div className="container">
// 				<UserComponent activeItem={activeItem} setActiveItem={setActiveItem} />
// 				<div className="cardsContainer">
// 					{data.map((activity) => (
// 						<CardComponent
// 							key={activity.title}
// 							activePeriod={Object.keys(activity.timeframes)[activeItem]}
// 							color={activity.color}
// 							title={activity.title}
// 							timeframes={activity.timeframes}
// 						/>
// 					))}
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default App;
import { useState, useEffect } from 'react';
import './App.css';
import avatar from './images/image-jeremy.png';
import data from './db/data.json';
import CardComponent from './components/CardComponent/CardComponent';

function App() {
	const [activeItem, setActiveItem] = useState(() => {
		const storedActiveItem = localStorage.getItem('period');
		return storedActiveItem !== null ? parseInt(storedActiveItem) : 0;
	});

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
		<div className="container">
			<div className="mainContainer">
				<div className="userContainer">
					<img src={avatar} alt="User avatar" className="avatar" />
					<div className="userInfo">
						<p>Report for</p>
						<p className="name">Jeremy Robson</p>
					</div>
				</div>
				<ul className="periodic">
					<li
						className={activeItem === 0 ? 'item active' : 'item'}
						onClick={() => handleClick(0)}
					>
						Daily
					</li>
					<li
						className={activeItem === 1 ? 'item active' : 'item'}
						onClick={() => handleClick(1)}
					>
						Weekly
					</li>
					<li
						className={activeItem === 2 ? 'item active' : 'item'}
						onClick={() => handleClick(2)}
					>
						Monthly
					</li>
				</ul>
			</div>
			<div className="cardsContainer">
				{data.map((activity) => (
					<CardComponent
						key={activity.title}
						activePeriod={Object.keys(activity.timeframes)[activeItem]}
						color={activity.color}
						title={activity.title}
						timeframes={activity.timeframes}
					/>
				))}
			</div>
		</div>
	);
}

export default App;

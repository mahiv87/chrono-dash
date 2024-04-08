import { useState, useEffect } from 'react';
import './App.css';
import UserComponent from './components/UserComponent/UserComponent';
import CardComponent from './components/CardComponent/CardComponent';
import data from './db/data.json';

function App() {
	const [activeItem, setActiveItem] = useState(1);

	useEffect(() => {
		const storedActiveItem = localStorage.getItem('period');
		if (storedActiveItem !== null) {
			setActiveItem(parseInt(storedActiveItem));
		}
	}, []);

	console.log(`App: ${activeItem}`);

	return (
		<>
			<div className="container">
				<UserComponent activeItem={activeItem} setActiveItem={setActiveItem} />
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
		</>
	);
}

export default App;

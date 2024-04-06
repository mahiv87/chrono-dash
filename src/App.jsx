import { useState } from 'react';

import './App.css';
import UserComponent from './components/UserComponent/UserComponent';
import CardComponent from './components/CardComponent/CardComponent';
import data from './db/data.json';

function App() {
	const [activeItem, setActiveItem] = useState(1);

	return (
		<>
			<div className="container">
				<UserComponent setActiveItem={setActiveItem} />
				<div className="cardsContainer">
					{data &&
						data.map((activity) => (
							<CardComponent
								period={activeItem}
								color={activity.color}
								title={activity.title}
								daily={activity.timeframes.daily.current}
								dailyPrev={activity.timeframes.daily.previous}
								weekly={activity.timeframes.weekly.current}
								weeklyPrev={activity.timeframes.weekly.previous}
								monthly={activity.timeframes.monthly.current}
								monthlyPrev={activity.timeframes.monthly.previous}
								key={activity.title}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default App;

import './App.css';
import UserComponent from './components/UserComponent/UserComponent';
import CardComponent from './components/CardComponent/CardComponent';
import data from './db/data.json';

function App() {
	return (
		<>
			<div className="container">
				<UserComponent />
				<div className="cardsContainer">
					{data &&
						data.map((activity) => (
							<CardComponent
								color={activity.color}
								title={activity.title}
								time={activity.timeframes.weekly.current}
								previous={activity.timeframes.weekly.previous}
								key={activity.title}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default App;

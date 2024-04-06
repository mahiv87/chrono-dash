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
								title={activity.title}
								time={activity.timeframes.weekly.current}
								previous={activity.timeframes.weekly.previous}
							/>
						))}
					{/* <CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent /> */}
				</div>
			</div>
		</>
	);
}

export default App;

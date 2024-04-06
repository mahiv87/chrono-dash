import './App.css';
import UserComponent from './components/UserComponent/UserComponent';
import CardComponent from './components/CardComponent/CardComponent';

function App() {
	return (
		<>
			<div className="container">
				<UserComponent />
				<div className="cardsContainer">
					<CardComponent />
				</div>
			</div>
		</>
	);
}

export default App;

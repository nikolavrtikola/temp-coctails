import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Error from './Pages/Error';
import Home from './Pages/Home';
import SingleCoctail from './Pages/SingleCoctail';

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/coctail/:id'>
					<SingleCoctail />
				</Route>
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

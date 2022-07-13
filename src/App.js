import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontEndStoreProvider from './context/FrontEndStoreProvider';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './css/App.css';

function App() {
	return (
		<FrontEndStoreProvider>
			<Switch>
				<Route path='/front-end-store/cart' component={ Cart } />
				<Route path='/front-end-store' component={ Home } />
			</Switch>
		</FrontEndStoreProvider>
	);
}

export default App;

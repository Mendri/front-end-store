import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontEndStoreProvider from './context/FrontEndStoreProvider';
import Home from './pages/Home';

function App() {
	return (
		<FrontEndStoreProvider>
			<Switch>
				<Route path='/front-end-store' component={ Home } />
			</Switch>
		</FrontEndStoreProvider>
	);
}

export default App;

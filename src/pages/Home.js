import React from 'react';
import { useContext } from 'react';
import FrontEndStoreContext from '../context/FrontEndStoreContext';

function Home() {
	const {test} = useContext(FrontEndStoreContext);
	return (
		<p>{test}</p>
	);
}

export default Home;
import React from 'react';
import propTypes from 'prop-types';
import FrontEndStoreContext from './FrontEndStoreContext';
import { useState } from 'react';

function FrontEndStoreProvider({ children }) {
	const [test, setTest] = useState('Front-End');
	const contextValue = {
		test,
		setStates: {
			setTest,
		}
	};

	return (
		<FrontEndStoreContext.Provider value={ contextValue }>
			{ children }
		</FrontEndStoreContext.Provider>
	);
}

FrontEndStoreProvider.propTypes = {
	children: propTypes.element.isRequired
};

export default FrontEndStoreProvider;
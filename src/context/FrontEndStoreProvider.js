import React from 'react';
import propTypes from 'prop-types';
import FrontEndStoreContext from './FrontEndStoreContext';
import { useState, useEffect } from 'react';

function FrontEndStoreProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [ categories, setCategories ] = useState([]);
	const [query, setQuery] = useState('computador');
	const contextValue = {
		products,
		query,
		categories,
		setStates: {
			setProducts,
			setQuery,
			setCategories,
		}
	};

	async function getProductsFromQuery(query) {
		const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
		const responseJson = await response.json();
		setProducts(responseJson.results);
	}

	async function getCategories() {
		const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
		const responseJson = await response.json();
		setCategories(responseJson);
	}

	useEffect(() => {
		getProductsFromQuery(query);
		getCategories();
	}, []);

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
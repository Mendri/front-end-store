import React, { useContext } from 'react';
import FrontEndStoreContext from '../context/FrontEndStoreContext';

function Products() {
	const { products } = useContext(FrontEndStoreContext);
	return(
		<div id='products-container'>
			{
				products.map((product) => (
					<div key={ product.id }>
						<h4>{ product.title }</h4>
						<img src={ product.thumbnail } alt={`imagem de um ${ product.title }`} />
					</div>
				))
			}
		</div>
	);
}

export default Products;
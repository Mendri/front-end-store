import React, { useContext } from 'react';
import FrontEndStoreContext from '../context/FrontEndStoreContext';

function Categories() {
	const { categories } = useContext(FrontEndStoreContext);
	return(
		<div id='categories-container'>
			{
				categories.map((categorie) => (
					<label key={ categorie.id }>
						{ categorie.name }
						<input type='radio' />
					</label>
				))
			}
		</div>
	);
}

export default Categories;
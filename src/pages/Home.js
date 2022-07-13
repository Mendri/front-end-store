import React from 'react';
import { useContext } from 'react';
import FrontEndStoreContext from '../context/FrontEndStoreContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
	const { products } = useContext(FrontEndStoreContext);

	return (
		<div>
			<Header />
			<main>
				{
					products.map((product) => (
						<div key={ product.id }>
							<h4>{ product.title }</h4>
							<img src={ product.thumbnail } alt={`imagem de um ${ product.title }`} />
						</div>
					))
				}
			</main>
			<Footer />
		</div>
	);
}

export default Home;
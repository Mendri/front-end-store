import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Categories from '../components/Categories';

function Home() {
	return (
		<div id='home-page'>
			<Header />
			<main id='home-container'>
				<Categories />
				<Products />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
import React from 'react';
import '../css/Header.css';

function Header() {
	return (
		<header id='header-container'>
			<p id='nav-title'>Front-End Store</p>
			<nav id='navigation-container'>
				<p className='nav-item'>Home</p>
				<p className='nav-item'>Carrinho</p>
			</nav>
		</header>
	);
}

export default Header;
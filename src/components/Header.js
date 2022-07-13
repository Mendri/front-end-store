import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
	return (
		<header id='header-container'>
			<p id='nav-title'>Front-End Store</p>
			<nav id='navigation-container'>
				<Link className='nav-item' to='/front-end-store'>
					Home
				</Link>
				<Link to='/front-end-store/cart' className='nav-item'>
					Carrinho
				</Link>
			</nav>
		</header>
	);
}

export default Header;
import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { Link, useLocation } from 'react-router-dom'
import logo from './logo.png';
import disneyPlusPromo from './disneyPlusPromo.jpg'
import './Header.css';

interface HeaderProps {
	setItemFilterName: Function,
}

export default function Header({setItemFilterName}: HeaderProps): JSX.Element {
	const { pathname } = useLocation();
	return (
		<header>
			<div>
				<Link to={'/'}><img src={logo} alt="mercadolivre logo" id="logo" /> </Link>
				<Searchbar setItemFilterName={setItemFilterName} />
				<img
					src={disneyPlusPromo}
					alt="Promotional material for disney plus"
					id="promo"
				/>
			</div>
			<Link to={pathname === '/' ? '/cart' : '/'}>
				<button>To {pathname === '/' ? 'cart' : 'home'}</button>
			</Link>
		</header>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import logo from './logo.png';
import disneyPlusPromo from './disneyPlusPromo.jpg'
import './Header.css';

export default function Header(): JSX.Element {
	return (
		<header>
			<img src={logo} alt="mercadolivre logo" id='logo'/>
      <Searchbar />
			<img src={disneyPlusPromo} alt="Promotional material for disney plus" id='promo'/>
		</header>
	);
}
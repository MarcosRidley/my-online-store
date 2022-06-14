import React from 'react';
import './Searchbar.css';

export default function Searchbar() {
  return (
		<div className="search-bar sbx-custom">
			<input type="text" placeholder="Estou buscando..." />
			<button type="button" onClick={() => console.log('oi')}>Lupinha</button>
		</div>
	);
}
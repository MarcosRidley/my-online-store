import React from 'react';
import './Searchbar.css';

interface SearchbarProps {
	setItemFilterName: Function;
}

export default function Searchbar({setItemFilterName }: SearchbarProps) {
	const [inputText, setInputText] = React.useState('');

	const handleChange = (ev: React.SyntheticEvent): void => {
		const target = ev.target as HTMLInputElement;
		setInputText(target.value);
	};
	const handleSearch = ():void => {
		setItemFilterName(inputText);
	};

	return (
		<div className="search-bar sbx-custom">
			<input
				type="text"
				placeholder="Estou buscando..."
				value={inputText}
				onChange={handleChange}
			/>
			<button type="button" onClick={handleSearch}>
				Lupinha
			</button>
		</div>
	);
}

import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import {Category} from '../../interfaces'

interface HomeProps {
	items: any[];
	addItemToCart: Function;
	categories: Category[] | undefined;
	setCurrentCategoryFilter: Function;
}

export default function Home({items, addItemToCart, categories, setCurrentCategoryFilter}:HomeProps): JSX.Element {

  const mappedItems = items.map((item) => (<ProductCard item={item} key={item.id} addItemToCart={addItemToCart} isCart={false} removeItemFromCart={():void => {}}/>));

  return (
		<div>
			<CategoryDisplay
				categories={categories}
				setCurrentCategoryFilter={setCurrentCategoryFilter}
			/>
			<div>{mappedItems}</div>
		</div>
	);
}
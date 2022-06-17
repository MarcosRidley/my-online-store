import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import {Category} from '../../interfaces'
import './Home.css'

interface HomeProps {
	items: any[];
	addItemToCart: Function;
	categories: Category[] | undefined;
	setCurrentCategoryFilter: Function;
	currentCategoryFilter: String;
	itemFilterName: String;
}

export default function Home({
	items,
	addItemToCart,
	categories,
	setCurrentCategoryFilter,
	currentCategoryFilter,
	itemFilterName,
}: HomeProps): JSX.Element {
	const mappedItems = items.map((item) => (
		<ProductCard
			item={item}
			key={item.id}
			addItemToCart={addItemToCart}
			isCart={false}
			removeItemFromCart={(): void => {}}
		/>
	));

	return (
		<div className="home">
			<div className="categories">
				<CategoryDisplay
					categories={categories}
					setCurrentCategoryFilter={setCurrentCategoryFilter}
					currentCategoryFilter={currentCategoryFilter}
				/>
			</div>
			<div className="home-items">
				{mappedItems.length > 0 ? (
					mappedItems
				) : (
					<p id='request-search-text'>
						{itemFilterName === '' ? 'Use a barra de pesquisa ou selecione um filtro para visualizar nossos produtos!' : `Nenhum item encontrado para o filtro ${itemFilterName} na categoria selecionada.`}
					</p>
				)}
			</div>
		</div>
	);
}
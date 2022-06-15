import React from 'react';
import { Category } from '../../interfaces';

interface CategoryDisplayProps {
  categories: Category[] | undefined
  setCurrentCategoryFilter: Function,
}

export default function CategoryDisplay({categories, setCurrentCategoryFilter}:CategoryDisplayProps):JSX.Element {
  let mappedCategories: JSX.Element[] = []
  if(categories) { mappedCategories = categories.map((category) => (
    <li key={category.id}>
		<button className="btn-category" onClick={() => setCurrentCategoryFilter(category.id)}>{category.name}</button>
		</li>
		))}

  return <ol>{categories && mappedCategories}</ol>;
}
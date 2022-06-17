import { Category } from '../../interfaces';
import './CategoryDisplay.css';

interface CategoryDisplayProps {
	categories: Category[] | undefined;
	currentCategoryFilter: String,
	setCurrentCategoryFilter: Function;
}

export default function CategoryDisplay({
	categories,
	currentCategoryFilter,
	setCurrentCategoryFilter,
}: CategoryDisplayProps): JSX.Element {
	let mappedCategories: JSX.Element[] = [];
	if (categories) {
		mappedCategories = categories.map((category) => (
			<button
				key={category.id}
				className="btn-category"
				onClick={() => setCurrentCategoryFilter(category.id)}
				style={
					category.id === currentCategoryFilter
						? { backgroundColor: 'red' }
						: undefined
				}
			>
				{category.name}
			</button>
		));
	}

	return <div className='category-container'>{categories && mappedCategories}</div>;
}
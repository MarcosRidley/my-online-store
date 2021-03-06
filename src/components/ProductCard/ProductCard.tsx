import React from 'react';
import BRLformatter from '../../helpers/BRLformatter';
import ProductCartModal from './ProductCardModal'
import './ProductCard.css'


interface ProductCardProps {
	item: any;
	addItemToCart: Function;
	isCart: boolean;
	currentAmmount?: number;
	removeItemFromCart: Function;
	cartItems:any[];
}
export default function ProductCard({
	item,
	addItemToCart,
	isCart,
	currentAmmount = 0,
	removeItemFromCart,
	cartItems,
}: ProductCardProps) {
	const addToCartButton: JSX.Element = (
		<button className="product-card-button" onClick={() => addItemToCart(item)}>
			Adicionar ao carrinho
		</button>
	);
	const manageAmmount: JSX.Element = (
		<div className='cart-management-btns'>
			<button
				className="product-cart-button minus"
				onClick={() => removeItemFromCart(item)}
			>
				-
			</button>
			<p className="product-cart-current-ammount">{currentAmmount}</p>
			<button
				className="product-cart-button plus"
				onClick={() => addItemToCart(item)}
			>
				+
			</button>
		</div>
	);
	return (
		<div className="product-card">
			<p className="product-card-title">{item.title}</p>
			<img
				src={item.thumbnail}
				alt={item.title}
				className="product-card-image"
			/>
			<p className="product-card-price">{BRLformatter(item.price)}</p>
			<ProductCartModal
				item={item}
				addItemToCart={addItemToCart}
				cartItems={cartItems}
			/>
			{isCart ? manageAmmount : addToCartButton}
		</div>
	);
}
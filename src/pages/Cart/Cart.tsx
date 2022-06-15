import React from "react";
import ProductCart from '../../components/ProductCard/ProductCard'

interface CartProps {
	cartItems: any[];
	addItemToCart: Function;
	removeItemFromCart: Function;
}
export default function Cart({cartItems, addItemToCart, removeItemFromCart}:CartProps):JSX.Element { 

  const cartItemSet = new Set(cartItems);
  const uniqueCartItems = Array.from(cartItemSet)
  const cartItemsMap = uniqueCartItems.map(item => {
    const ammount = cartItems.filter(cartItem => cartItem === item).length
    return <ProductCart key={item.id} item={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} isCart={true} currentAmmount={ammount} />
});

  return (
    <div className="cart-container">
      <h3>Carrinho</h3>
      {cartItemsMap}
    </div>
  )
}
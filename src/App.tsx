import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart"
import * as api from './services/api';
import {Category} from './interfaces'
import './App.css';

function App(): JSX.Element {

  const [categories, setCategories] = useState<Category[] | undefined>()
  const [itemFilterName, setItemFilterName] = useState('ronaldo')
  const [items, setItems] = useState<any[]>([])
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState('')
  const [cartItems, setCartItems] = useState<any[]>([])

  const addItemToCart = (item:any):void => { 
    setCartItems([...cartItems, item]);
  }

	const removeItemFromCart = (item:any):void => {
		const newCartItems = [...cartItems];
		const itemCartIndex = newCartItems.indexOf(item);
		newCartItems.splice(itemCartIndex, 1);
		setCartItems(newCartItems);
	}


  useEffect(() => {
    if(!categories) api.getCategories().then((result) => setCategories(result));
    api.getProductsFromCategoryAndQuery(currentCategoryFilter, itemFilterName).then((result) => setItems(result.results))
  },[categories, currentCategoryFilter, itemFilterName]);

const loadingText:string = 'Loading...'

  return (
		<BrowserRouter>
			<Header setItemFilterName={setItemFilterName} />
			<Routes>
					<Route
						path="/"
						element={
							<Home
								items={items}
								addItemToCart={addItemToCart}
								categories={categories}
								setCurrentCategoryFilter={setCurrentCategoryFilter}
							/>
						}
					/>
				<Route
					path="/cart"
					element={<Cart cartItems={cartItems} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

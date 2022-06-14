import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import * as api from './services/api';
import {Categories} from './interfaces'
import './App.css';




function App(): JSX.Element {
  const [categories, setCategories] = React.useState<Categories[] | undefined>()
  useEffect(() => {
    api.getCategories().then((result) => setCategories(result));
  }, [])
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;

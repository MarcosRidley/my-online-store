import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
pText:string
}

function App({pText}:AppProps) {
  return (
    <p>{pText}</p>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Home from './components/Home';
//import Contact from './components/Contact';
//import About from './components/About';
//import Allproducts from './components/Allproducts';
//import Buyproduct from './components/Buyproduct';
import MainComponent from './MainComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

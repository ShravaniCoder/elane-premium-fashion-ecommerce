import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ShopProvider } from './context/ShopContext';
import App from './App';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode><HelmetProvider><BrowserRouter><ShopProvider><App /></ShopProvider></BrowserRouter></HelmetProvider></React.StrictMode>
);
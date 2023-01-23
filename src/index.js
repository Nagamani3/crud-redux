import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';




 ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Provider store={store}>
 <App/>
 </Provider>
 </BrowserRouter>);




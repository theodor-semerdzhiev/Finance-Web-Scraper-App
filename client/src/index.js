import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from'react-redux';
import stock_info, { stock } from './features/stock_info';
import news_info from './features/news_info';

const store = configureStore({
  reducer: {
    stock_info: stock_info,
    news_info: news_info
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>    
  </React.StrictMode>
);



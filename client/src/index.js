import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from'react-redux';
import financial_info from './features/financial_info';

const store = configureStore({
  reducer: {
    financial_info: financial_info
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



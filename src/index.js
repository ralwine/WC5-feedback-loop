import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

// reducer that acts a 'cart' to collect our data.
const emotions=(state = [], action) =>{
  return state
}

const storeInstance = createStore(
    combineReducers({
        emotions
    }),
applyMiddleware(
  logger
)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeInstance}>
            <App />
        </Provider>
);

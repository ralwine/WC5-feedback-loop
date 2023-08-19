import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

// reducer that acts a 'cart' to collect our data.
const emotionsCart=(state = [], action) =>{
  if (action.type === 'RATE_EMOTION'){
    return [...state, action.payload]
  }
  return state
}

// reducer for the render of the above array items
const emotionsInfo =(state = [], action) =>{
  return state
}

const storeInstance = createStore(
    combineReducers({
        emotionsCart,
        emotionsInfo
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

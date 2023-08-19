import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
function App() {

  const emotionsCart = useSelector(store => store.emotions)
  const dispatch = useDispatch()



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path='/' exact>
          <h1>
            How are you feeling today?
          </h1>
          <h2>
            Feeling?
          </h2>
          <input type="number" placeholder='Scale of 1-10' />
          <Link to='/understanding'>
            <button className="fancyBtn">NEXT</button>
          </Link>
        </Route>
        <Route path='/understanding' exact>
          <h1>
            How well are you understanding the content?
          </h1>
          <h2>
            Understanding?
          </h2>
          <input type="number" placeholder='Scale of 1-10' />
          <Link to='/support'>
            <button className="fancyBtn">NEXT</button>
          </Link>
        </Route>
        <Route path='/support' exact>
          <h1>
            How well are you being supported?
          </h1>
          <h2>
            Support?
          </h2>
          <input type="number" placeholder='Scale of 1-10' />
          <Link to='/comments'>
            <button className="fancyBtn">NEXT</button>
          </Link>
        </Route>
        <Route path='/comments' exact>
          <h1>
            Any comments you want to leave?
          </h1>
          <h2>
            Comments
          </h2>
          <input type="number" placeholder='Scale of 1-10' />
          {/* <Link to='/review'> */}
          <button className="fancyBtn">NEXT</button>
          {/* </Link> */}
        </Route>
        <Route></Route>
        <Route></Route>
      </Router>

    </div>
  );
}

export default App;

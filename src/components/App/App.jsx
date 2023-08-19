import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { FeelingItem } from '../FeelingItem/FeelingItem'
import { UnderstandingItem } from '../UnderstandingItem/UnderstandingItem'
import { SupportItem } from '../SupportItem/SupportItem';
import { CommentsString } from '../CommentsString/CommentsString';

function App() {

  const rateEmotions = useSelector(store => store.emotions)
  const dispatch = useDispatch()

  // rate emotions to dispatch to emotionsCart in index.js



  return (
    <div className='App'>


      <Router>
        <Route path='/' exact>
          <FeelingItem />
        </Route>
        <Route path='/understanding' exact>
          <UnderstandingItem />
        </Route>
        <Route path='/support' exact>
          <SupportItem />
        </Route>
        <Route path='/comments' exact>
          <CommentsString />
        </Route>
        <Route></Route>
        <Route></Route>
      </Router>

    </div>
  );
}

export default App;





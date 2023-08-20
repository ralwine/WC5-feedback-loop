import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FeelingItem } from '../FeelingItem/FeelingItem'
import { UnderstandingItem } from '../UnderstandingItem/UnderstandingItem'
import { SupportItem } from '../SupportItem/SupportItem';
import { CommentsString } from '../CommentsString/CommentsString';

function App() {

  const rateEmotions = useSelector(store => store.emotions)
  const dispatch = useDispatch()

  // rate emotions to dispatch to emotionsCart in index.js
  //
  const emotionsList = useSelector(store => store.emotionsCart)
  console.log("in emoList", emotionsList)
  const emoInfo = useSelector(store => store.emotionsInfo)


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
        <Route path='/review' exact>
          <header>
            <h1>
              Review Your Feedback
            </h1>
          </header>
          <main>
            <div>
              {emoInfo.map((emo, index) =>
                <div key={index}>
                  <h3>Feelings: {emo.feelingRating}</h3>
                  <h3>Understanding: {emo.understandingRating} </h3>
                  <h3>Support: {emo.supportRating}</h3>
                  <h3>Comments: {emo.comments}</h3>
                </div>
              )}
            </div>
          </main>
          <footer>
            <Link to='/thanks'>
              <button className='submit'>SUBMIT</button>
            </Link>
          </footer>
        </Route>
        <Route path='/thanks' exact>
          <div className='lastScreen'>
            <h1>THANK YOU FOR YOUR PARTICPATION!</h1>
            <button className='feedback'>Leave New Feedback</button>
          </div>
        </Route>
      </Router>

    </div>
  );
}

export default App;





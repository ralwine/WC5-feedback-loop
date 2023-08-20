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
  console.log("emoInfo", emoInfo)

  console.log("OY there!", emotionsList.map((item, index) => item.feeling_rating))


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
              <ul>
                {emotionsList.map((item, index) => (
                  <li>
                    {item.feeling_rating}


                    {item.understanding_rating}
                    {item.support_rating}

                    {item.comments}
                  </li>
                ))}
              </ul>
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
            <Link to='/' exact>
              <button className='feedback'>Leave New Feedback</button>
            </Link>
          </div>
        </Route>
      </Router>

    </div>
  );
}

export default App;





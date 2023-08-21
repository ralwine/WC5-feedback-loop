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
import { LastScreen } from '../LastScreen/LastScreen';


function App() {


  // rate emotions to dispatch to emotionsCart in index.js
  //
  const emotionsList = useSelector(store => store.emotionsCart)
  console.log("in emoList", emotionsList)
  const emoInfo = useSelector(store => store.emotionsInfo)
  console.log("emoInfo", emoInfo)

  console.log("OY there!", emotionsList.map((item, index) => item.feeling_rating))

  function postFeedback(emotionsList) {
    console.log("inPF", emotionsList)
    axios.post('/feedback', emotionsList)
    .then(response =>{
      console.log("Respone: ", response.data)
    }).catch(error =>{
      console.log("Error in client POST", error)
    })
  }




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

              {emotionsList.map((item, index) =>
                <div className='feedbackInfo'>
                  <div key={index}>
                    <h3>{item.feeling_rating}</h3>
                    <h3>{item.understanding_rating}</h3>
                    <h3>{item.support_rating}</h3>
                    <h3>{item.comments}</h3>
                  </div>
                </div>
              )}

            </div>

          </main>
          <footer>
            <Link to='/thanks'>
              <button className='submit' onClick={postFeedback}>SUBMIT</button>
            </Link>
          </footer>
        </Route>
        <Route path='/thanks' exact>
          <LastScreen />
        </Route>
      </Router>

    </div>
  );
}

export default App;






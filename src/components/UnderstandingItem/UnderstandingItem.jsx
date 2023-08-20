import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function UnderstandingItem() {

  const dispatch = useDispatch()
  const [understandingRating, setUnderstandingRating] = useState('')

  // HandleSubmit here
  const handleUnderstandingRating = () => {
    console.log("inside handleUnder")
    let understandingData = {
      understanding_rating: understandingRating
      //not sure about this 
    }
    console.log("Understanding? rating", understandingData)
    dispatch({
      type: 'RATE_EMOTION',
      payload: understandingData
    })

  }

  return (<>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>
    <h1>
      How well are you understanding the content?
    </h1>
    <h2>
      Understanding?
    </h2>
    <input type="number" id="inputUnderstanding" placeholder='Scale of 1-10' value={understandingRating}
      onChange={event => setUnderstandingRating(event.target.value)} />
    <div className='fancyDiv'>
      <Link to='/support'>
        <button className="nextBtn" onClick={handleUnderstandingRating}
          disabled={!understandingRating}>NEXT</button>
      </Link>
    </div>
  </>)
}

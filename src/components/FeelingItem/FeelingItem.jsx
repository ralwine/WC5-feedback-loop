import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function FeelingItem() {

  const dispatch = useDispatch()
  const [feelingRating, setFeelingRating] = useState('')





  // HandleSubmit here.. going to need a condtional restrict rating from num1-10
  const handleFeelingRating = () => {
    console.log("inside handleFeel")

    let feelingData = {
      feeling_rating: feelingRating
      //not sure about this method above .... but it works!
    }
    console.log("Feeling? rating", feelingData)
    dispatch({
      type: 'RATE_EMOTION',
      payload: feelingData
    })


  }

  return (<>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>
    <h1>
      How are you feeling today?
    </h1>
    <h2>
      Feeling?
    </h2>
    {/* input id should be different for each? */}
    <input type="number" id="inputFeeling" placeholder='Scale of 1-10' value={feelingRating}
      onChange={event => setFeelingRating(event.target.value)} />
    <div className='fancyDiv'>
      <Link to='/understanding'>
        <button className="nextBtn" onClick={handleFeelingRating}
          disabled={!feelingRating}>NEXT</button>

      </Link>
    </div>
  </>)
}

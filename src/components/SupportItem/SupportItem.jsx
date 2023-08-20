import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function SupportItem() {

  const dispatch = useDispatch()
  const [supportRating, setSupportRating] = useState('')

  // HandleSubmit here.. going to need a condtional restrict rating from num1-10
  const handleSupportRating = () => {
    console.log("inside handleSupp")
    let supportData = {
      support_rating: supportRating
      //not sure about this method above .... but it works!
    }
    console.log("Support? rating", supportData)
    dispatch({
      type: 'RATE_EMOTION',
      payload: supportData
    })
  }

  return (<>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>
    <h1>
      How well are you being supported?
    </h1>
    <h2>
      Support?
    </h2>
    <input type="number" id="inputSupport" placeholder='Scale of 1-10' value={supportRating}
      onChange={event => setSupportRating(event.target.value)} />
    <div className='fancyDiv'>
      <Link to='/comments'>
        <button className="nextBtn" onClick={handleSupportRating}
          disabled={!supportRating}>NEXT</button>
      </Link>
    </div>
  </>)
}

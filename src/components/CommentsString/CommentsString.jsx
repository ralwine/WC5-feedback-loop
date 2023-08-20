import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function CommentsString() {

  const dispatch = useDispatch()
  const [comments, setComments] = useState('')

  // HandleSubmit here.. going to need a condtional restrict rating from num1-10
  const handleComments = () => {
    console.log("inside handleComm")
    let commentsData = {
      comments: comments
      //not sure about this method above .... but it works!
    }
    console.log("Comments rating", commentsData)
    dispatch({
      type: 'RATE_EMOTION',
      payload: commentsData
    })
    
  }

  // Use same button to render to page!
  const handleFeedback = () => {
    console.log("inside handleFb")
    //let
  }



  return (<>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>
    <h1>
      Any comments you want to leave?
    </h1>
    <h2>
      Comments
    </h2>
    <input type="text" id="commentsInput" placeholder='Tell us what is on your mind!' value={comments}
      onChange={event => setComments(event.target.value)} />
    <div className='fancyDiv'>
      <Link to='/review'>
        <button className="nextBtn" onClick={()=>{handleComments(); handleFeedback();}} >NEXT</button>
      </Link>
    </div >
  </>)
}

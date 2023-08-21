import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import React from 'react';
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';



export function LastScreen() {

  // had to rehash this particular feature, I seemed to forget how useHistory works the first time around
  const history = useHistory()
  // reset data and return to first screen -> /feelings
  function resetFeedback(){
    console.log("in resetFeedback")
    history.push('/')
    window.location.reload(true)
  }

  return (<>
    <div className='lastScreen'>
      <h1>THANK YOU FOR YOUR PARTICPATION!</h1>
    
        <button className='feedback' onClick={resetFeedback}>Leave New Feedback</button>
   
    </div>
  </>);
}

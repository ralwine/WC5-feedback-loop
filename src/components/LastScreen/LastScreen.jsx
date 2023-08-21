import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import React from 'react';
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';



export function LastScreen() {
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

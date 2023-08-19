import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function FeelingItem() {
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
    <input type="number" id="inputFeeling" placeholder='Scale of 1-10' />
    <div className='fancyDiv'>
      <Link to='/understanding'>
        <button className="nextBtn">NEXT</button>
      </Link>
    </div>
  </>)
}

import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function UnderstandingItem() {
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
    <input type="number" id="inputUnderstanding" placeholder='Scale of 1-10' />
    <div className='fancyDiv'>
      <Link to='/support'>
        <button className="nextBtn">NEXT</button>
      </Link>
    </div>
  </>)
}

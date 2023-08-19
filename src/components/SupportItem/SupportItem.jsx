import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function SupportItem() {
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
    <input type="number" id="inputSupport" placeholder='Scale of 1-10' />
    <div className='fancyDiv'>
      <Link to='/comments'>
        <button className="nextBtn">NEXT</button>
      </Link>
    </div>
  </>)
}

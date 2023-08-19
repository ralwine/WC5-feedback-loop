import React from 'react';

export function CommentsString() {
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
    <input type="text" id="commentsInput" placeholder='Tell us what is on your mind!' />
    <div className='fancyDiv'>
      {/* <Link to='/review'> */}
      <button className="nextBtn">NEXT</button>
      {/* </Link> */}
    </div>
  </>)
}

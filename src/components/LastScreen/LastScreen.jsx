import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function LastScreen() {


  return (<>
    <div className='lastScreen'>
      <h1>THANK YOU FOR YOUR PARTICPATION!</h1>
      <Link to='/' exact>
        <button className='feedback'>Leave New Feedback</button>
      </Link>
    </div>
  </>);
}

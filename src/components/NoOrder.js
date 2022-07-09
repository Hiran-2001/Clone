import React from 'react'
import './css/NoOrder.css'
import {Link} from 'react-router-dom';
import { BsBookmarkStarFill } from 'react-icons/bs';
function NoOrder() {
  return (
    <div className='text-center'>
      <BsBookmarkStarFill id='icon'/ >
      <br />
      <br />
      
      <h3>No orders yet</h3>
      <br />
      <h4>When you place your first order, it will appear here</h4>
      <br />
      <Link to='/'><button id='FindFood'>Find Food</button></Link>
      
    </div>
  )
}

export default NoOrder
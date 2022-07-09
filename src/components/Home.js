import React from 'react'
import { TiLocation } from 'react-icons/ti'
import { MdKeyboardArrowRight } from 'react-icons/md'
import './css/Home.css'
import data from './Data';
import Hotels from './Hotels'
function Home() {
  return (
    <div>

      <div id='Home'>

        <h1 id='h1'>Order food to your door</h1>
        <div className="searchArea">
          <div className="location">
            <TiLocation id='location-icon' />
          </div>
          <input id='search' type="search" placeholder='Enter delivery address' />

          <button id='find-food'>Find Food</button>
        </div>

      </div>
      <div className="nearme">
        <h5>Restaurants near me <MdKeyboardArrowRight id='arrow' />
          Indian Food delivery near me</h5>
        <h1>Indian Food Delivery Near Me</h1>
        <h5>Browse the shops and stores near you offering Indian Food delivery.</h5>
        <br />
        <hr />
      </div>
      
      
            <Hotels  />
         
    </div>
  )
}

export default Home
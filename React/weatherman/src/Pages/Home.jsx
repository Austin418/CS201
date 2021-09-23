import React, { useState, useEffect } from 'react';
import Daily from '../Components/Daily';
import Navbar from '../Components/Navbar';
import Sun from '../Components/Sun'
import { useWeatherContext } from '../util/context';

const Home = () => {
  return (
    <>

      <div className="background">
        <h1>Title</h1>
        <Sun />
        <div className="section">
          <div className="weatherTile">
            <Daily />
          </div>


        </div>
      </div>
      <div className="footer">
        Footer
      </div>

    </>
  )
}

export default Home

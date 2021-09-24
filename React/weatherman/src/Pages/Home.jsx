import React, { useState, useEffect } from 'react';
import Sun from '../Components/Sun'
import Today from '../Components/Today';
import { useWeatherContext } from '../util/context';

const Home = () => {
  return (
    <>

      <div className="background">
        <h1>Today</h1>
        <Sun />
        <div className="section">
          <div className="weatherTile">
            <Today/>
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

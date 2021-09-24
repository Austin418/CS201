import React, { useState, useEffect } from 'react'
import Sun from '../Components/Sun'
import Daily from '../Components/Daily'

const Week = () => {
  return (
    <>
      <div className="background">
        <h1>Weekly Forecast</h1>
        <Sun />
        <div className="section">
          
            <Daily />
          


        </div>
      </div>
      <div className="footer">
        Footer
      </div>
    </>
  )
}

export default Week

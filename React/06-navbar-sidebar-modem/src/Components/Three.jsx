import React, { useState } from 'react'
import Data from '../data'
import { GrClose } from "react-icons/gr";

const Three = ({ info, title, id }) => {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <div className="three-listing" onClick={() => {
      setIsShowing(!isShowing)
    }}>
      <h2>{title}</h2>
      {isShowing ? <>
      <button className="close-modal" onClick={() => {
            setIsShowing(false)
            console.log("this does work")
          }}>
            <GrClose />
          </button>
        <div className="darken-background" ></div>
        <div className="modal">

          
          <p>
            {info}
          </p>
        </div>
      </>
        : <div></div>}
    </div>
  )
}

export default Three

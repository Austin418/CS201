import React, { useState } from 'react'
import Data from '../data'
import { GrClose } from "react-icons/gr";

const Three = ({ info, title, id }) => {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <div className="three-listing" onClick={() => {
      setIsShowing(true)
    }}>
      <h2>{title}</h2>
      {isShowing ? <>
        <div className="darken-background" ></div>
        <div className="modal">

          <button className="close-modal">
            <GrClose />
          </button>
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

import React from 'react'
import { useAppContext } from '../util/context';


const OpenModalButton = () => {
  const {openModal} = useAppContext();
  return (
    <button onClick={openModal}>
      
      Modal

    </button>
  )
}

export default OpenModalButton

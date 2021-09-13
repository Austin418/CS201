import React, { useState } from 'react'
import { useNewsContext } from '../util/context'

const Pagination = () => {
  const {setPage}= useNewsContext()
  return (
    <div>
      
      <button className="previous" onClick={() => {
        setPage(oldPage => oldPage - 1)
      }}>Previous</button>
      <button className="next" onClick={() => {
        setPage((oldPage) => oldPage +1)
      }}>Next</button>
    </div>
  )
}

export default Pagination

import React, { useState } from 'react'
import { useNewsContext } from '../util/context'
import { FcNext, FcPrevious } from "react-icons/fc";

const Pagination = () => {
  const { loading, page, nbPages, handlePage } = useNewsContext()
  return (
    <div className="pagination">

      <button disabled={loading} className="previous" onClick={() => handlePage('dec')}><FcPrevious/></button>
      <p>
        {page + 1} / {nbPages}
      </p>
      <button disabled={loading} className="next" onClick={() => handlePage('inc')}><FcNext/></button>
    </div>
  )
}

export default Pagination

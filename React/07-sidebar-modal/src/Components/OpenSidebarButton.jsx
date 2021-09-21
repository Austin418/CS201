import React from 'react'
import { useAppContext } from '../util/context'
import { FaBars } from 'react-icons/fa'

const OpenSidebarButton = () => {
  const {openSidebar} = useAppContext()
  return (
    <div>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
    </div>
  )
}

export default OpenSidebarButton

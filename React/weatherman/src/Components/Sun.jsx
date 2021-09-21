import React, { useState } from 'react'


const Sun = () => {
  const [dayTime, setDayTime] = useState(false)
  return (
    <div className="solar-container">
    
    <div className={dayTime ? "moon" : "sun"}>
      
    </div>

    </div>
  )
}

export default Sun

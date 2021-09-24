import React, { useState, useEffect } from 'react'
import { useWeatherContext } from '../util/context'
import useFetch from '../util/useFetch'

const Daily = () => {
  // const {weather} = useWeatherContext()

  const { weather, error, loading } = useFetch('hourly=temperature_2m&temperature_unit=fahrenheit')
  if (loading) {
    return (
      <div className="loading">

      </div>
    )
  }

  console.log(weather)
  const { hourly } = weather
  const { temperature_2m: t2m, time } = hourly
  

  return (
    <div className="weather-container">
      {t2m.map((hour, index) => {
        const date = new Date(time[index])
        console.log(String(date.toDateString()));
        const outDate = String(date.toDateString())
        // let amPm = "am"
        // let clock = 0
        // outClock = `${clock} ${amPm}`
        console.log(t2m);
        // if (outDate === outDate) {
        //   clock++
        // }
        // if (clock > 12) {
        //   clock = 1
        //   if (amPm == 'am') {
        //     amPm = 'pm'
        //   } else {
        //     amPm = 'am'
        //   }
        // }
        return (
          <div  className="weather-tile">
            <h3>{outDate}</h3>
            <h3>{hour}</h3>
            {/* <h2>{hourly}</h2> */}
            {/* <h4>{temp}</h4> */}
            {/* <h4>{time}</h4> */}
          </div>
        )
      })}
    </div>
  )
}

export default Daily

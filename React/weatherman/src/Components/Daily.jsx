import React, { useState, useEffect } from 'react'
import { useWeatherContext } from '../util/context'
import useFetch from '../util/useFetch'

const Daily = () => {
  // const {weather} = useWeatherContext()
  
  const { weather, error, loading } = useFetch('temperature_unit=fahrenheit')
  if(loading){
    return(
      <div className="loading">

      </div>
    )
  }
  console.log(weather)
  return (
    <div>
      {weather.map((hour) => {
        const {hourly, time, temperature_2m: temp} = hour
        return(
          <>
          <h2>{hourly}</h2>
          <h4>{temp}</h4>
          <h4>{time}</h4>
      </>
      )
      })}
    </div>
  )
}

export default Daily

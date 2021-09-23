import React, { useState, useEffect, useContext } from 'react'
import {useFetch} from './useFetch'

const WeatherContext = React.createContext()


export const WeatherProvider = ({children}) => {
  const [latitude, setLatitude] = useState('51.5002')
  const [longitude, setLongitude] = useState('-0.1262')
  const [otherParam, setOtherParam] = useState('hourly=temperature_2m&&temperature_unit=fahrenheit')
  const [weather, setWeather] = useState('')

  
  // navigator.geolocation.getCurrentPosition(()=>{
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude)
  // });

  // const { weather, error, loading } = useFetch(`latitude=${latitude}&longitude=${longitude}&${otherParam}`)
  

  return <WeatherContext.Provider value={{weather, latitude, setLatitude, longitude, setLongitude, otherParam, setOtherParam}}>
    {children}
  </WeatherContext.Provider>
}

export const useWeatherContext = () => {
  return useContext(WeatherContext)
}
import React, { useState, useEffect } from 'react'
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [weather, setWeather] = useState(null)
  const [latitude, setLatitude] = useState('20')
  const [longitude, setLongitude] = useState('30')

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude)
  });

  const API_ENDPOINT = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&`

  const fetchWeather = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();


      setWeather(data);


      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`)
    fetchWeather(`${API_ENDPOINT}${searchQuery}`)

  }, [searchQuery])
  return { loading, error, weather }
}

export default useFetch

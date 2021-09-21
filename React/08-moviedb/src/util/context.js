import React, { useState, useContext, useReducer } from 'react'
import { useFetch } from './useFetch'

const MovieContext = React.createContext()

export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("batman")
  const { movies, error, loading } = useFetch(`s=${query}&`)

  return <MovieContext.Provider value={{movies, error, loading, query, setQuery}}>
    {children}
  </MovieContext.Provider>
}

export const useMovieContext = () => {
  return useContext(MovieContext)
}

import React, { useState, useContext } from 'react'
import { useFetch } from './useFetch'

const NewsContext = React.createContext()

export const NewsProvider = ({ children }) => {
  const [query, setQuery] = useState("hawking")
  const [page, setPage] = useState(0)
  const { news, error, loading } = useFetch(`query=${query}&page=${page}`)

  return <NewsContext.Provider value={{news, error, loading, query, setQuery, setPage, page}}>
    {children}
  </NewsContext.Provider>
}

export const useNewsContext = () => {
  return useContext(NewsContext)
}

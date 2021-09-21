import React, { useEffect, useContext, useReducer } from 'react'
import { reducer } from './reducer'

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?"

//the state object that holds the values for the context
const initialState = {
  news: [],
  page: 0,
  query: 'hacker',
  nbPages: 0,
  loading: true,
}

const NewsContext = React.createContext();
export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchnews = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      dispatch({ type: 'SET_NEWS', payload: data })
    } catch (error) {
      console.error(error)
    }
  }


  const removeStory = (id) => {
    dispatch({ type: "REMOVE_STORY", payload: id })
  }
  const setQuery = (query) => {
    dispatch({ type: "SET_QUERY", payload: query })
  }
  const handlePage = (value) => {
    dispatch({ type: "CHANGE_PAGE", payload: value })
  }
  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: query })
  }
  useEffect(() => {
    fetchnews(`${API_ENDPOINT}query=${state.query}&page=${state.page}&`)
    console.log(state);
  }, [state.query, state.page])

  return <NewsContext.Provider value={{ ...state, removeStory, handlePage, setQuery, handleSearch }}>
    {children}
  </NewsContext.Provider>

}

export const useNewsContext = () => {
  return useContext(NewsContext)

}
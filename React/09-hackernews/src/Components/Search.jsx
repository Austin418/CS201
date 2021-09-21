import React from 'react'
import { useNewsContext } from '../util/context'

const SearchForm = () => {
  const { query, handleSearch } = useNewsContext()
  return (
    <div className="navbar">
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <h2>Search Hacker News</h2>
        <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchForm

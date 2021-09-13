import React, { useState } from 'react'
import Pagination from '../Components/Pagination'
import News from '../Components/News'
import { useNewsContext } from '../util/context'

const Home = () => {
  const { query, setQuery, error } = useNewsContext();
  return (
    <>
      <header className="header">
        <h1></h1>
      </header>
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <h2>Search movies</h2>
        <input type="text" className="form-input" value={query} onChange={(e) => setQuery(e.target.value)} />
        {error.show && <div className="error">{error.msg}</div>}
      </form>
      <Pagination />
      <section className="container resaults">
        <News />
      </section>
    </>
  )
}

export default Home

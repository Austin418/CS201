import React, { useState } from 'react'
import Pagination from '../Components/Pagination'
import News from '../Components/News'
import { useNewsContext } from '../util/context'
import SearchForm from '../Components/Search'

const Home = () => {
  const { query, setQuery } = useNewsContext();
  return (
    <>
      <header className="header">
        <h1></h1>
      </header>
      
        <SearchForm />
      
      <Pagination />
      <section className="container results">
        <News />
      </section>
      <Pagination style="margin-bottom: 100px" />
    </>
  )
}

export default Home

import React from 'react'
import { useMovieContext } from '../util/context'
import { Link } from 'react-router-dom'

const url = '#'

const Movies = () => {
  const { movies, loading } = useMovieContext()
  console.log(movies);
  if (loading) {
    return (
      <div className="loading">
      </div>
    )
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster === 'N/A' ? url : poster} alt="{title}" />
              <div className="movie-info">
                <h4 className="title"></h4>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )

}

export default Movies

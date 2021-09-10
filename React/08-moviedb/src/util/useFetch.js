import React, { useState, useEffect } from "react";
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&`;
export const useFetch = (searchQuery) => {

  //search query will be something like [&s=batman]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState(null);

  //url is always the API_ENDPOINT + THE 
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`)
    fetchMovies(`${API_ENDPOINT}${searchQuery}`)
  }, [searchQuery])
  return{loading, error, movies}
};


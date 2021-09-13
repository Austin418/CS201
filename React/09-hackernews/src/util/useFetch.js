import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`;
export const useFetch = (searchQuery) => {

  //search query will be something like [&s=batman]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [news, setNews] = useState([]);

  //url is always the API_ENDPOINT + THE 
  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();


      setNews(data.hits);
      setLoading(false);
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`)
    fetchNews(`${API_ENDPOINT}${searchQuery}`)
  }, [searchQuery])
  return { loading, error, news }
};


import React from 'react'
import { useNewsContext } from '../util/context'

const News = () => {
  const {loading, hits, removeStory, news} = useNewsContext()
  if(loading){
    return <div className="loading"></div>
  }

  console.log(news);
  return (<>
    {news.map((knew) => {
        const { objectID : id, title, author, num_comments, url, points } = knew
        return (
          <div className="tile">

            <h3>{title}</h3>
            <div className="description">
              <h4>{points} points by {author}</h4>
              |
              <h5>{num_comments}</h5>
              <div>
                <a className="read-link" target="_blank" href={url} rel="noopener noreferrer">Read More</a>
                |
                <a href="#"className="remove">
                  Remove
                </a>
              </div>
            </div>
          </div>
        )
      })
    }
  </>)
}

export default News

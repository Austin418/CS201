import React from 'react'
import { useNewsContext } from '../util/context'

const News = () => {
  const { news } = useNewsContext()

  console.log(news);
  return (<>
    {news.map((knew) => {
        const { title, author, num_comments, url } = knew
        return (
          <div>

            <h2>{title}</h2>
            <div className="description">
              <h4>By {author}</h4>
              |
              <h5>{num_comments}</h5>
              <div>
                <a href={url}>Read More</a>
                <button className="remove">
                  Remove
                </button>
              </div>
            </div>
          </div>
        )
      })
    }
  </>)
}

export default News

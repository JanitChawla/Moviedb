import React from 'react'

const Favourite = (props) => {
    return (
        <div className="movie-list">
        {props.favouriteMovie.map((item, i) => (
          <div className="movie-card" key={i}>
            <h2>{item.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            <p>{item.overview.slice(0, 70)}...</p>
          </div>
        ))}
      </div>
    )
}

export default Favourite;
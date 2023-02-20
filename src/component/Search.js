import React, { useState, useEffect } from "react";

const Search = ({ props }) => {
  console.log(props);
  //   const { data } = props;
  const [movie, setMovie] = useState("");
  useEffect(() => {
    console.log(props);
    // fetch(
    //   `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${props}&page=1&include_adult=false`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setMovie(data.results));
  }, []);
  return (
    <div className="movie-list">
      Hello
      {/* {data.map((item, i) => (
        <div
          onClick={(item) => props.handleClick(item)}
          className="movie-card"
          key={i}
        >
          <h2>{item.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <p>{item.overview.slice(0, 70)}...</p>
        </div>
      ))} */}
    </div>
  );
};

export default Search;

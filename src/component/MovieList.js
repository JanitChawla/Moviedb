import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Main = (props) => {
  // const { data } = props;
  // const [favourite, setFavourite] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:'FETCH_DATA'});
  },[]);
  const data = useSelector(state => state.data.results);
  console.log(data)
  if (data === undefined) return false;
  return (
      <div className="movie-list">
        {data.map((item, i) => (
          <div onClick={(item)=> props.handleClick(item)} className="movie-card" key={i}>
            <h2>{item.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            <p>{item.overview.slice(0, 70)}...</p>
          </div>
        ))}
      </div>
  );
};

export default Main;

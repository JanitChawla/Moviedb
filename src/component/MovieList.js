import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const [model, showModel] = useState(false);
  const [modelData, setModelData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
  }, []);

  const data = useSelector((state) => state.data.results);
  if (data === undefined) return false;
  return (
    <>
      <div className="movie-list">
        {data.map((item, i) => (
          <div
            onClick={() => {
              console.log(item);
              setModelData(item);
              showModel(true);
            }}
            className="movie-card"
            key={i}
          >
            <h2>{item.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            <p>{item.overview.slice(0, 70)}...</p>
          </div>
        ))}
      </div>
      {model ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{modelData.title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => showModel(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*header*/}
                <li className="mb-1">{}</li>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ul>
                    <img
                      style={{ width: "200px" }}
                      src={`https://image.tmdb.org/t/p/w500/${modelData.poster_path}`}
                    />

                    <li className="mb-1">{modelData.overview}</li>
                  </ul>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Main;

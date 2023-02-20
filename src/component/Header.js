import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState("");

  // const handleChange = async (e) => {
  //   await setData(e.target.value);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   console.log(search);

  //   const redirect = () => <Link to="/search" state={{ props: search }} />;
  //   redirect();
  // }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(data);
    console.log(search);
  };

  return (
    <div className="board">
      <h1>Famous Movies</h1>
      <span style={{ background: "#12263b", color: "white" }}>
        <div style={{ alignItems: "center", display: "flex" }}>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <input
              type="text"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                setSearch(data);
              }}
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to={`/search`} state={{ props: "hello" }}>
                Search
              </Link>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import "./styles.css";
import Header from "./component/Header";
import Favourite from "./component/Favourite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <MovieList />} />
          <Route exact path="/search" render={() => <Search />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

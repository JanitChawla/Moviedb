import React, {useState} from "react";
import { Provider } from "react-redux";
import store from "./store";
import MovieList from "./component/MovieList";
import './styles.css'
import Header from "./component/Header";
import Favourite from "./component/Favourite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
    const [favouriteMovie, setFavouriteMovie] = useState([]);

const addFavouriteMovie = (movie) => {
  const newList = [...favouriteMovie, movie];
  setFavouriteMovie(newList);
  console.log(favouriteMovie);
}
    return(
    <Provider store={store}>
        <Router>
        <Header />
            <Switch>
                <Route exact path="/favourite" render={()=> <Favourite favouriteMovie={favouriteMovie} />} />
                <Route exact path="/" render={()=><MovieList handleClick={addFavouriteMovie} />} />
            </Switch>
        </Router>
    </Provider>
    )};

export default App;
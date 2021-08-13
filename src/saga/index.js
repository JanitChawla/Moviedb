import { all } from "redux-saga/effects";
import getNowPlaying from "./nowPlaying";

function* rootSaga() {
  yield all([
    getNowPlaying()
  ]);
}

export default rootSaga;

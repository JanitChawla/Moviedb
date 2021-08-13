import { call, put, takeEvery } from 'redux-saga/effects';

function* mySaga() {
  yield takeEvery('FETCH_DATA', fetchData);
}

function* fetchData() {

  const data = yield call(
    () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
      .then(response => response.json()),
  );
  yield put({ type: 'GET_MOVIE_SUCCESS', payload: { data } });
}

export default mySaga;

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const getMovieList = async () => {
    const res = await fetch('https://api.themoviedb.org/3/list/2?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
    const result =await  res.json()
    return result.items;
}

const setFavMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/list/2?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
    const result =await  res.json()
    return result.items;
}
function* fetchUser() {
   try {
       const list = yield getMovieList();
       yield put({type:'GET_MOVIE_LIST', payload:list})
   } catch (e) {
    console.log(e);
    }
}

function* favMovie() {
    try {
        const list = yield setFavMovie();
        yield put({type:'FAV_MOVIE_LIST', payload:list})
    } catch (e) {
     console.log(e);
     }
 }


function* mySaga() {
  yield takeLatest("GET_MOVIE", fetchUser);
  yield takeLatest("FAV_MOVIE", favMovie);
}


export default mySaga;
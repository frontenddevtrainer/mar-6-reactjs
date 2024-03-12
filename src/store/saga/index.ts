import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// worker function
function getTodos() {
  return axios("https://jsonplaceholder.typicode.com/todos", { method: "GET" });
}

// Worker saga
function* fetchTodosSaga() {
  try {
    const data = yield call(getTodos);
    yield put({ type: "GET_TODOS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GET_TODOS_ERROR" });
  }
}

// sagas
export function* saga() {
  yield takeEvery("GET_TODOS", fetchTodosSaga);
}

// useDispatch >
// sagas >
// worker saga >
// worker function (async tasks) >
// work saga >
// put action() >
// reducer >
// updates store >
// useSelector

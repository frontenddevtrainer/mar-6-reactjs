import { call, takeEvery, put } from "redux-saga/effects";

// worker function
function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => {
      return response.json();
    }
  );
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

import { call, takeEvery, put } from "redux-saga/effects";

function getTodos() {
  console.log("fetchTodos");
  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => {
      return response.json();
    }
  );
}

function* fetchTodosSaga() {
  try {
    const data = yield call(getTodos);
    yield put({ type: "GET_TODOS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GET_TODOS_ERROR" });
  }
}

export function* saga() {
  yield takeEvery("GET_TODOS", fetchTodosSaga);
}

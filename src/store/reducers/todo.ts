const initialState: { todos: any[] } = { todos: [] };

export function todosReducer(state = initialState, action: any) {
  console.log(action);

  switch (action.type) {
    case "GET_TODOS_SUCCESS": {
      const _state = { ...state };
      _state.todos = action.payload;
      return _state;
    }
    default: {
      return state;
    }
  }
}

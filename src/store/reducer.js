const initialState = {
  todoList: [],
};

const reducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'GET_LIST'){
    newState.todoList = [...action.value];
  }

  return newState;
};

export default reducer;
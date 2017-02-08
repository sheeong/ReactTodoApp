
export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOWCOMPLETED':
      return !state;
    default:
      return state;
  }
};

export var toggleTodoReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return !state;
    default:
      return state;
  }
};

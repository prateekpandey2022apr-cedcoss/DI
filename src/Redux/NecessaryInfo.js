const initialState = {
  id: 100,
};

export const necessaryInfo = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "user":
      return {
        ...state,
        user: action.data,
      };

    case "todo":
      return {
        ...state,
        todo: action.data,
      };

    case "success":
      return {
        ...state,
        success: action.data,
      };

    default:
      return state;
  }
};

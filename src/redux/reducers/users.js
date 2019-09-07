import { FETCH_USERS, ADD_USER, DELETE_USER } from "../types";

const initialState = {
  users: []
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS: {
      return { ...state, users: action.payload };
    }

    case ADD_USER: {
      return { ...state, users: [...state.users, action.payload] };
    }

    case DELETE_USER: {
      return { ...state, users: [...state.users] };
    }

    default: {
      return state;
    }
  }
}

export default usersReducer;

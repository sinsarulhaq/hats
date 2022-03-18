import * as types from "./actionType";

const initialState = {
  user: null,
};

const allReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN_USER:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default allReducer;
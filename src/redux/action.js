import { auth, provider } from "../firebase";
import * as types from "./actionType";

const setUser = (user) => ({
    type: types.LOGIN_USER,
    payload: user,
  });

  export const getAuthUser = () => {
    return (dispatch) => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          dispatch(setUser(user));
        }
      });
    };
  };
  
  export const LoginAPI = () => {
    return (dispatch) => {
      auth.signInWithPopup(provider).then((payload) => {
        dispatch(setUser(payload.user));
      });
    };
  };
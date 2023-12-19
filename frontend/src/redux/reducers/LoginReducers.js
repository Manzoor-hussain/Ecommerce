//LOGIN CONSTANTS
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../constants/LoginConstants";
//Login Reducer
const initialState = {
  loading: false,
  username: null,
  error: null,
};
export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        access_token: action.payload,
        username:action.username,
        success: true,
      };
    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload
      };
      //console.log("redi=ucer",action.payload)
    case USER_LOGOUT:
      return {
        ...state,
        username: null,
        loading:false,
        error:null,
      };
    default:
      return state;
  }
};

// Logout Reducer

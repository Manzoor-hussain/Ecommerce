//REDUX
import { applyMiddleware, combineReducers } from "redux";
import { createStore } from 'redux';
//REDUX-THUNK
import thunk from "redux-thunk";
//REDUX-DEVTOOLS-EXTENSION
import { composeWithDevTools } from "redux-devtools-extension";
//REDUCERS
import { userLoginReducer } from "./reducers/LoginReducers";
import { userRegisterReducer } from "./reducers/RegisterReducers";
import { forgetPasswordReducer } from "./reducers/RegisterReducers";
// import {userQuestionReducer, userQuestionTempReducer} from "./reducers/QuestionReducers";


import {
    ListUserReducers,
    adminFileReducer,
    GetParameterReducers,
    UpdateAdminParameterReducer,
    UpdateSubcriberReducer,
    GetSubcriberReducers,
} from "./reducers/AdminReducers"
//CALLING REDUCERS
const initialState = {
  loading: false,
  username: null,
  error: null,
};
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  // userQuestion:userQuestionReducer,
  // userQuestionTemp:userQuestionTempReducer,
  // ListUser:ListUserReducers,
  // AdminFile:adminFileReducer,
  // getParameter:GetParameterReducers,
  // updateparameter:UpdateAdminParameterReducer,
  // getsubcriber:GetSubcriberReducers,
  // updatesubcriber:UpdateSubcriberReducer,
  // forgetPassword:forgetPasswordReducer,

});
// const userInfoFromStorage = localStorage.getItem("username")
//   ? localStorage.getItem("username")
//   : null;
// const initialState = {
//   userLogin: { username: userInfoFromStorage },
// };
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)

  
  )
);
export default store;

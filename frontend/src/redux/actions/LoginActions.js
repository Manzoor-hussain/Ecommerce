//AXIOS
import axios from "axios";
//COMMON API
import { ApiServer } from "../../ApiConstant";


import { useNavigate } from "react-router-dom";
import { Account, ID} from 'appwrite';

//LOGIN CONSTANTS
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../constants/LoginConstants";
import { account } from "../../appwriteConfig";

//LOGIN ACTIONS
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    let response = await account.createEmailSession(username,password)
    let accountDetails = await account.get();
    console.log("user Details",accountDetails)
   
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: accountDetails,
      username:accountDetails.email,
    });
   
    // localStorage.setItem('username', accountDetails.email)
   
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.message || 'Invalid email or password',
    });
   
    //console.log(error.response.status);
  }
};

// Logout Actions

export const Logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  console.log("Logout")
   account.deleteSession('current');
  console.log("Logout")
 
};

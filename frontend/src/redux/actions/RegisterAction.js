//AXIOS
import axios from "axios";
//COMMON API
import { ApiServer } from "../../ApiConstant";
import { Account, ID} from 'appwrite';
import { account } from "../../appwriteConfig";

//JWT-DECODER
// import jwt from "jwt-decode";
//LOGIN CONSTANTS
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGOUT,
    USER_FORGETPASS_REQUEST,
    USER_FORGETPASS_SUCCESS,
    USER_FORGETPASS_FAILURE,
  } from "../constants/RegisterConstants";

//Register  ACTIONS
export const register = (email,password,username) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
  
    let response =await account.create(ID.unique(),email,password,username, {
            
    })

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: response,
    });
  
  } catch (error) {
   
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error,
    });
  
    
  }
};



//Forget Password  ACTIONS
export const forgetpassword = (email,password,password2) => async (dispatch) => {
  print("action",email)
  try {
    dispatch({
      type: USER_FORGETPASS_REQUEST,
    });
    
    
    
    var bodyFormData = new FormData();
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    bodyFormData.append("password2", password2);

    const { data } = await axios.post(ApiServer + "/api/change_password/", bodyFormData);
   // console.log("manzoor",data)
   // const token = data.token.access;
    //storeToken(res.data.token)
    //console.log("tokenn", data.token.access);
    // const user = jwt(token);
    // console.log("userr", user.user_id);
    dispatch({
      type: USER_FORGETPASS_SUCCESS,
      payload: data,
    });
    //console.log("success", data);
    // localStorage.setItem("userInfo", JSON.stringify(data));
    // localStorage.setItem("user", JSON.stringify(user.user_id));
    
  } catch (error) {
    dispatch({
      type: USER_FORGETPASS_FAILURE,
      payload: error,
    });
  
    //console.log(error.response.status);
  }
};

// Logout Actions

export const Logout = () => (dispatch) => {
  window.localStorage.clear();
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')

  window.location.reload();
  dispatch({ type: USER_LOGOUT });
};

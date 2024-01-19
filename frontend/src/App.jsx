import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ChatComponent } from "./containers/chat";
import SecondNav from "./Components/User/Desktop/Container/SecondNav";
import UserTable from "./containers/admin/UserTable";
import Statistics from "./containers/admin/Statistics";
import SourcesModels from "./containers/admin/SourcesModels";
import { SignUpDefault } from "./containers/auth/SignUp/SignUpDefault";
//import { StepForm } from "./containers/auth/SignUp/StepForm";
import { SignUp } from "./containers/auth/SignUp/SignUp";
import { SignUpFinalScr } from "./containers/auth/SignUp/SignupFinalScr";
import { LoginEmail } from "./containers/auth/SignUp/LoginEmail";
import { NewPass } from "./containers/auth/SignUp/NewPass";
import { SubscriptionModal } from "./Components/modal/SubscriptionModal";
// import HomePage from "./Components/User/HomePage/HomePage";
import { useSelector ,useDispatch} from "react-redux";
import {login} from './redux/actions/LoginActions'

import { ConfirmPass } from "./containers/auth/SignUp/ConfirmPass";


import {FormMainControl} from "./containers/auth/SignUp/FormMainControl"
import { useEffect } from "react";
import  {Client ,Account,Databases ,ID}  from  'appwrite';

import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import { useAuth } from "./utils/AuthContext";

import { HomePage } from "./containers/chat/home";

import {AddCard } from "./containers/chat/addcard"
function App() {


  
  const access_token=localStorage.getItem("access_token")
  const userLogin = useSelector((state) => state.userLogin);
  const { username } = userLogin;
  
 

  console.log("username",username)
  console.log("access",access_token)
 
  return (
   

    <BrowserRouter>
    
          
          <Routes>
          {/* <Route path="/finalscr" element={<SignUpFinalScr />} />
        <Route path="/newpass" element={username==null?<NewPass />:<Navigate to="/" />} />
        <Route path="login" element={username==null ? <LoginEmail /> :<Navigate to="/" />} />
        <Route path="/signup" element={username == null?<SignUpDefault />:< Navigate to="/"/>} />
        <Route path="/confirm-password" element={username==null?<ConfirmPass />:<Navigate to="/"/>} /> */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-cart" element={<AddCard/>}/>
           
           
          
           

        
          </Routes>
       
   
    </BrowserRouter>
  );
}

export default App;

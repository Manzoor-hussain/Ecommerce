import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import SecondNav from "./Components/User/Desktop/Container/SecondNav";

//import { StepForm } from "./containers/auth/SignUp/StepForm";

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
import { Shop } from "./containers/chat/Shop";
import { About } from "./containers/chat/aboutus";
import ContactUs from "./containers/chat/Contact";



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
        <Route path="/add-cart/:productId" element={<AddCard/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
           
           
          
           

        
          </Routes>
       
   
    </BrowserRouter>
    
  );
}

export default App;

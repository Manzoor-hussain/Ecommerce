import NavBtn from "../../../Components/Button/NavBtn";
import Notes from "../../../Components/Notes/Notes";
import { InputWithIcon } from "../../../Components/InputTag/InputWithLabel";
import Navbar from "../../../Components/navbar/Navbar";
import { ASSETS } from "../../../assets/path";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {login} from '../../../redux/actions/LoginActions'

import React, { useEffect, useState } from "react";
//import  {Client ,Account,Databases ,ID}  from  'appwrite';

import { useAuth } from '../../../utils/AuthContext'

export const LoginEmail = () => {
  const navigate = useNavigate();
  
  // const {error,user, loginUser} = useAuth();
  const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = useSelector(state => state.userLogin);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value
    });
 

  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email=='' || formData.password == '')
    {
      alert("Enter Email and passowrd")
      return
    }
   
    dispatch(login(formData.email, formData.password));
  
    console.log(formData); // This will log the form data
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { username } = userLogin;
 


  // useEffect(()=>{
  //   if (username)
  //   {
  //     navigate("/chat")
  //   }
  // },[username])
 



   








  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("L’adresse email n’est pas conforme"),
      password: Yup.string().required("Password Required"),
    }),
    onSubmit: async (values) => {
      //dispatch(login(values.email, values.password));

      const email = values.email;
      const password = values.password
      const userInfo = { email,password}
      dispatch(login(values.email, values.password));
      // loginUser(userInfo)

    },
  });
  return (
    <div className="h-screen overflow-hidden">
      <Navbar signup={true} />
      <div className="flex">
        <form onSubmit={formik.handleSubmit} className="w-1/2 py-20 pt-20">
          <div className="flex justify-center items-center">
            <img src={ASSETS.EMOJI.HANDS} className="h-10 w-10" />
          </div>
       
          <h1 className="text-3xl text-center font-bold">
            Wellcome to login Page !
          </h1>
          {error && <p className="text-3xl text-center style={{ color: 'red' }}">{error}</p>}

          {/* form  */}
          <div className="flex flex-col gap-5 pt-6 items-center">
            <InputWithIcon
              type="email"
              placeholder="Enter email"
              icon={true}
              name="email"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.email}
              errors={formik?.errors?.email}
              touched={formik?.touched?.email}
            />
            <InputWithIcon
              type="password"
              placeholder="Enter passoword"
              icon={false}
              pass={true}
              name="password"
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.password}
              errors={formik?.errors?.password}
              touched={formik?.touched?.password}
            />
            <div className="flex justify-between w-[400px]">
            <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-aqua rounded-xl" : ""
                }
              >
                <span className="text-xs text-textgray">
                  don't have account! Sign Up
                </span>
              </NavLink>
              <NavLink
                to="/newpass"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-aqua rounded-xl" : ""
                }
              >
                <span className="text-xs text-textgray">
                  Forget Password
                </span>
              </NavLink>
            </div>
          </div>

          {/* button  */}
          <div className="flex justify-center py-12 relative">
        
          {!loading &&(<NavBtn text="Login" bgcolor="#A1FEDA" type="submit"/>)}
            
            {loading && (
    <div className="absolute top-1/2 left-100% transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-6 h-6 border-t-2 border-red-600  text-red rounded-full animate-spin"></div>
    </div>
  )
  }
          </div>
        </form>
        {/* image  */}
        <div className="w-1/2">
          <Notes
            image={ASSETS.PROFILES.SIGN_UP}
            bgColor="#EDFAFA"
            notebgColor="#DCF5F5"
            color="#004A54"
            text="You can login here and.then you can ask questoin from chatbot"
          />
        </div>
      </div>
    </div>
  );
};

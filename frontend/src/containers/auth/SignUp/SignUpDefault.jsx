import NavBtn from "../../../Components/Button/NavBtn";
import Notes from "../../../Components/Notes/Notes";
import {
  InputWithIcon,
  InputWithCheckbox,
} from "../../../Components/InputTag/InputWithLabel";
import Navbar from "../../../Components/navbar/Navbar";
import { ASSETS } from "../../../assets/path";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { register } from "../../../redux/actions/RegisterAction";
import { useDispatch, useSelector } from "react-redux";
//import SignUp from './SignUp';

export const SignUpDefault = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { loading, error ,success} = useSelector(state => state.userRegister);
   useEffect(()=>{
    if (success){
      navigate("/login")
    }
   },[success])

  

  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("L’adresse email n’est pas conforme"),
      password: Yup.string()
        .matches(/[A-Z]/, "At least one uppercase letter is required.")
        .matches(/[0-9]/, "At least one digit is required.")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "At least one special character is required."
        )
        .min(8, "Minimum 8 characters required.")
        .required("Password Required"),

      confirm_password: Yup.string()
        .required("Confirm Password")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: async (values) => {
     
      const email = values.email;
      const password = values.password;
      var formdata= new FormData()
      formdata.append("email",email)
      formdata.append("password",password)
      formdata.append("username",email.split("@")[0])
      dispatch(register(email,password,email.split("@")[0]))
    
    },
  });

  
  const validateUpperCaseLetter = () => {
    if (formik.values.password && !/[A-Z]/.test(formik.values.password)) {
      return true;
    }
    return false; // Return undefined if validation passes
  };

  const validateSpecialCharacter = () => {
    if (
      formik.values.password &&
      !/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password)
    ) {
      return true;
    }
    return false; // Return undefined if validation passes
  };

  const validateDigits = () => {
    if (formik.values.password && !/[0-9]/.test(formik.values.password)) {
      return true;
    }
    return false; // Return undefined if validation passes
  };

  // Custom validation function to check form validity
  // Custom validation function to check form validity
  const isFormValid = () => {
    const { errors, touched, dirty, isValid } = formik;
    const isAnyFieldError = Object.keys(errors).some(
      (fieldName) => touched[fieldName]
    );

    return (
      (isValid && !isAnyFieldError) ||
      (!dirty && Object.keys(touched).length === 0)
    );
  };

  return (
    <div className="h-screen overflow-hidden">
      <Navbar signup={true} />
      <div className="flex ">
        <div className="w-1/2 flex flex-col justify-between space-y-8 xl:space-y-10 max-h-[85vh] py-5 ">
          {/* heading and description  */}
          <div className="flex flex-col space-y-2 items-center">
          
            <div className="text-3xl text-center font-bold">
              Enter  Email and Password
            </div>
            <div className="text-textgray text-center text-md w-8/12">
            Communications will be associated with this address and you
              will allow you to connect.
            </div>
          </div>

          {/* form  */}
          <div className="px-5 space-y-4 mx-auto">
            <form id="myform"
              // onSubmit={formik.handleSubmit}
              className="flex flex-col space-y-2 px-10"
            >
              <InputWithIcon
                type="email"
                placeholder="Adresse email"
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
                placeholder="Enter Your Password"
                icon={true}
                pass={true}
                name="password"
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values?.password}
                errors={formik?.errors?.password}
                touched={formik?.touched?.password}
              />
              <InputWithIcon
                type="password"
                placeholder="Confrim passowrd"
                icon={true}
                pass={true}
                name="confirm_password"
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values?.confirm_password}
                errors={formik?.errors?.confirm_password}
                touched={formik?.touched?.confirm_password}
              />
            </form>

            {/* checkbox  */}
            <div className="flex flex-col px-10 text-sm">
              <InputWithCheckbox
                SignUpDefault={true}
                label="atleast  8  charater"
                validate={formik.values.password.length < 8}
                touched={formik.values.password.length > 1}
              />

              <InputWithCheckbox
                SignUpDefault={true}
                label="1 upper case letter"
                validate={validateUpperCaseLetter()}
                touched={formik?.values?.password.length > 1}
              />
              <InputWithCheckbox
                SignUpDefault={true}
                label="atleast 1 digits"
                validate={validateDigits()}
                touched={formik.values.password.length > 1}
              />
              <InputWithCheckbox
                SignUpDefault={true}
                label="1 special character"
                validate={validateSpecialCharacter()}
                touched={formik.values.password.length > 1}
              />
            </div>
          </div>

          {/* line bar  */}
          {/* <div className="bg-inputBg rounded-lg">
            <div className="h-2 w-32 bg-alertPink"></div>
          </div> */}

          {/* button  */}
          <div className="flex justify-center ">
         
            <NavBtn
              text="Register"
              // type="submit"
              onFunctionCalled={formik.handleSubmit}
          

              bgcolor={
                formik.values.password.length < 1 ||
                formik.values.confirm_password.length < 1 ||
                formik.values.email.length < 1 ||
                !isFormValid()
                  ? "#F0F2F3" // Set the default color when conditions are true
                  : "#A1FEDA" // Set the desired color when conditions are false
              }
              color={
                formik.values.password.length < 1 ||
                formik.values.confirm_password.length < 1 ||
                formik.values.email.length < 1 ||
                !isFormValid()
                  ? "#CDD6D7" // Set the default color when conditions are true
                  : "#053036" // Set the desired color when conditions are false
              }
              disabled={
                formik.values.password.length < 1 ||
                formik.values.confirm_password.length < 1 ||
                formik.values.email.length < 1
                  ? true
                  : !isFormValid()
              }
              // onFunctionCalled={() => navigate("/signup")}
            />
          </div>
        </div>
        {/* image  */}
        <div className="w-1/2">
          <Notes
            image={ASSETS.PROFILES.SIGN_UP}
            bgColor="#EDFAFA"
            notebgColor="#DCF5F5"
            color="#004A54"
            text="The only instant messaging designed by and for healthcare professionals"
          />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";
import bgImage from '../assets/bg.jpg'; // Import the background image
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [errorMessage,setErrorMessage] = useState();

  const onSubmit=async(values,actions)=>{
    // console.log('hii');
    try{
      const response= await axios.post('http://localhost:8000/api/register',values);
      console.log(response.data);
    }
    catch(error){
      if(error.response&&error.response.data&&error.response.data.errors){
        setErrorMessage(error.response.data.errors.email.toString());
      }
    }
  }
    const {values,handleChange,errors,handleSubmit}=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
        },
        validationSchema:registerSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit:onSubmit
    })

    const navigate= useNavigate();
  return (
    <div
      className="h-screen w-full flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
        <div className="bg-white w-full max-w-md rounded-lg mx-4"
              style={{
                boxShadow: 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
              }}>
          <form onSubmit={handleSubmit} >
            <p className="text-[32px] font-medium text-center py-6">Register</p>
            <div className="flex flex-col space-y-7 pt-3 px-6">
              {/* First Name */}
              <div className="w-full">
                <div className="flex items-center space-x-3">
                  <IoPersonOutline className="w-5 h-5" />
                  <input
                    id='firstname'
                    type="text"
                    onChange={handleChange}
                    value={values.firstname}
                    placeholder="Enter Your First Name"
                    className="focus:outline-none ring-0 focus:border-0 placeholder:text-[16px] placeholder:font-medium flex-1"
                  />
                </div>
                <hr className="w-full h-1 mx-auto bg-gray-200 border-0 rounded my-2 dark:bg-gray-700" />
                {errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="w-full">
                <div className="flex items-center space-x-3">
                  <IoPersonOutline className="w-5 h-5" />
                  <input
                    id='lastname'
                    type="text"
                    onChange={handleChange}
                    value={values.lastname}
                    placeholder="Enter Your Last Name"
                    className="focus:outline-none ring-0 focus:border-0 placeholder:text-[16px] placeholder:font-medium flex-1"
                  />
                </div>
                <hr className="w-full h-1 mx-auto bg-gray-200 border-0 rounded my-2 dark:bg-gray-700" />
                {errors.lastname && (
                   <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <div className="flex items-center space-x-3">
                  <IoMailOutline className="w-5 h-5" />
                  <input
                    id='email'
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Enter Your Email"
                    className="focus:outline-none ring-0 focus:border-0 placeholder:text-[16px] placeholder:font-medium flex-1"
                  />
                </div>
                <hr className="w-full h-1 mx-auto bg-gray-200 border-0 rounded my-2 dark:bg-gray-700" />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="w-full">
                <div className="flex items-center space-x-3">
                  <IoLockClosedOutline className="w-5 h-5" />
                  <input
                    id='password'
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Enter Your Password"
                    className="focus:outline-none ring-0 focus:border-0 placeholder:text-[16px] placeholder:font-medium flex-1"
                  />
                </div>
                <hr className="w-full h-1 mx-auto bg-gray-200 border-0 rounded my-2 dark:bg-gray-700" />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex justify-between mx-5 py-3">
              <div className="flex items-center space-x-1">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="text-gray-500 font-medium">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>

            {errorMessage && (
                <p className="text-red-500 text-md mt-1 pl-5">{errorMessage}</p>
            )}

            {/* Register Button */}
            <div className="flex justify-center mt-8 mb-5">
              <button type='submit' className="text-white bg-purple-600 w-[90%] py-3 rounded-md hover:bg-purple-400">
                Register Now
              </button>
            </div>

            {/* Login Redirect */}
            <div className="flex justify-center space-x-1 pb-8">
              <p className="text-gray-500 font-medium">Already a Member?</p>
              <p onClick={()=> navigate('/login')} className="font-medium text-purple-400 cursor-pointer hover:text-purple-300">Login Now</p>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Register;

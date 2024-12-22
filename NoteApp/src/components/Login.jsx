import React, { useContext, useState } from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import bgImage from '../assets/bg.jpg'; // Import the image
import googleIcon from '../assets/google.svg'
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

const Login = () => {
    const [errorMessage,setErrorMessage] = useState();
    const {login} = useUserContext();
    const onSubmit=async(values,actions)=>{
        console.log('hihih')
        try{
            const response= await axios.post('http://localhost:8000/api/login',values);
            login(response.data.user.first_name,response.data.token);
            console.log('Login Successful:', response.data);
            // console.log( response.data.user.first_name);

        }
        catch(error){
            if(error.response&&error.response.data&&error.response.data.message){
                setErrorMessage(error.response.data.message);
            }
            console.log('Error:', error);
        }

    }
    const {values,handleChange,errors,handleSubmit}=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:loginSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit:onSubmit
    })

    const navigate= useNavigate();

  return (
    <div className="h-screen w-full flex justify-center items-center bg-cover bg-center" 
    style={{ 
        backgroundImage: `url(${bgImage})`, 
      }}>
        <div className='bg-white w-full max-w-md rounded-lg mx-4'
            style={{ 
                boxShadow: 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px' 
              }}>
            <form onSubmit={handleSubmit}>
                <p className='text-[32px] font-medium text-center py-6'>Login</p>
                <div className='flex flex-col space-y-7 pt-3 px-6'>
                    <div className='w-full'>
                        <div className='flex items-center space-x-3'>
                            <IoMailOutline className='w-5 h-5' />
                            <input
                                id='email'
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                placeholder='Enter Your email'
                                className='focus:outline-none ring-0 focus:border-0 placeholder:text-[16px] placeholder:font-medium flex-1'
                            />
                        </div>
                        <hr className="w-full h-1 mx-auto bg-gray-200 border-0 rounded my-2 dark:bg-gray-700" />
                        {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center space-x-3'>
                            <IoLockClosedOutline className='w-5 h-5' />
                            <input
                                id='password'
                                type="text"
                                value={values.password}
                                onChange={handleChange}
                                placeholder='Enter Your password'
                                className='focus:outline-none ring-0 focus:border-0 placeholder:text-[16px] placeholder:font-medium flex-1'
                            />
                        </div>
                        <hr className="w-full h-1 mx-auto bg-gray-200 border-0 rounded my-2 dark:bg-gray-700" />
                        {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>
                </div>
                <div className='flex justify-between mx-5 py-3'>
                    <div className='flex items-center space-x-1'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-gray-500 font-medium'>Remember me</label>
                    </div>
                    <div className='font-medium text-purple-400 cursor-pointer hover:text-purple-300'>Forget Password?</div>
                </div>
                {errorMessage && (
                    <p className="text-red-500 text-md mt-1 pl-5">Invalid Username or Password</p>
                )}
                <div className='flex justify-center mt-8'>
                    <button type='submit' className='text-white bg-purple-600 w-[90%] py-3 rounded-md hover:bg-purple-400'>Login Now</button>
                </div>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">OR</span>
                </div>
                <div className='flex justify-center cursor-pointer items-center mt-2 border-[2px] rounded-md border-slate-300 hover:border-blue-500 w-[90%] mx-auto'>
                    <div className='flex justify-center items-center space-x-4'>
                        <img src={googleIcon} className='w-8 h-8' alt="" />
                        <div className='text-black w-[90%] py-3 rounded-md'>Continue With Google</div>
                    </div>
                </div>
                <div className='flex justify-center space-x-1 pt-5 pb-8'>
                    <p className='text-gray-500 font-medium'>Not a Member?</p>
                    <p onClick={()=> navigate('/register')} className='font-medium text-purple-400 cursor-pointer hover:text-purple-300'>SignUp Now</p>
                </div>
            </form>
        </div>
    </div>

  );
};

export default Login
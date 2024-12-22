  import * as yup from 'yup';

  export const registerSchema = yup.object().shape({
    firstname: yup.string().required("This feild is required"),
    lastname: yup.string().required("This feild is required"),
    email: yup.string().email("please enter the valid email").required("This feild is required"),
    password: yup.string().required("This feild is required"),
  });

  export const loginSchema = yup.object().shape({
    email: yup.string().email("please enter the valid email").required("This feild is required"),
    password: yup.string().required("This feild is required"),
  });
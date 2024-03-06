import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./CompanyLogin.css"

import {useDispatch} from "react-redux"


import { AKJContext } from "../../Context";
import { fetchStudentSuccess } from "../../redux/student/studentAction";


const emailValidation = yup.object({
  email: yup.string().required("Enter an Email"),
  password: yup.string().required("Enter Password").min(8,"Enter Minimum Eight Characters"),
});

const CompanyLogInPage = () => {
  const [user,setUser]=useState()
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const[loader,setLoader]=useState(false)
  const navigate = useNavigate();
  const dispatch=useDispatch()
const {baseUrl}=useContext(AKJContext)
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: emailValidation,
      onSubmit: (user) => {
        logInFunc(user);
      },
    });
    const logInFunc = async (user) => {
      try {
        const response = await fetch(`${baseUrl}/companyLogin`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        if (data.message === "Company logged in successfully") {
         
          localStorage.setItem("email-company",data.company.email);
          localStorage.setItem("name-company",data.company.companyName);
          localStorage.setItem("token-company",data.token);
          localStorage.setItem("data",JSON.stringify(data.company));
         navigate("/mainCompany")
         
          localStorage.setItem("email",data.user.email);
          localStorage.setItem("name",data.user.firstName);
          localStorage.setItem("token",data.token);
          dispatch(fetchStudentSuccess(data.user.firstName))
          navigate("/");
        } else if(data.message === "invalid credentials password"){
          setShowPassword(true);
          setLoader(false)
        } else if(data.message === "invalid credentials email"){
          setShowEmail(true);
          setLoader(false)
        }
      } catch (error) {
        console.log("User LogIn Error : ", error);
      
      }
  
    };

    const setLoaderFunction =()=>{
      if(!values.email ||
        !values.password || (errors.password && touched.password)){
       return setLoader(false)
      }
      else{
        return setLoader(true)
      };
    }
  
  return (
   
    <div className="loginPage">
      
      <div className="login-main">

      <div>
      <div className='welcome-board-login'>
        Welcome to AKJ Jobs
      </div>
        <div>
          <form onSubmit={handleSubmit} className="form-signIn">
            <div className="title-login-user"
            onClick={()=>navigate("/")}>Company Login</div>

          <div className="input-div">
                <label className="textlabel-signIn" for="email"
                >Email <span style={{color:"brown"}}>*</span></label>
              <input
                className="input-login-user"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              ></input>
            </div>
            {errors.email && touched.email ? (
              <h6 style={{ color: "red" }}>{errors.email}</h6>
            ) : (
              ""
            )}

              <div className="input-div">
                <label className="textlabel-signIn" for="password">Password <span style={{color:"brown"}}>*</span></label>
              <input
                placeholder="Password"
                className="input-login-user"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></input>
            </div>
            {errors.password && touched.password ? (
              <h6 style={{ color: "red" }}>{errors.password}</h6>
            ) : (
              ""
            )}
            {showEmail?(
              <h6 style={{ color: "red" }}>
                Entered Email Is not available, please Signup before login
              </h6>
            ) : (
              ""
            )}
            {showPassword ? (
              <h6 style={{ color: "red" }}>
                Password is incorrect
              </h6>
            ) : (
              ""
            )}

            <div className="flex-container">
              <div className="w-100 m-1">
               
            <p
            className="forget-password-login-user"
            onClick={() => navigate("/forget")}
            
          >
            Forget Password
          </p>
              </div>
              <div className="w-100 m-1">
                <button type="" className="login-btn-land"
                onClick={()=>setLoaderFunction()}
                >
                  {loader?<Spinner animation="border" variant="secondary" size="md" />:"Login"}
                </button>
              </div>
            </div>
            <div>
        <p>Click Here To SignUp <button onClick={()=>navigate("/signUpCompany")}
        className="signUpNavigate">SignUp</button></p>
        </div>
          </form>
        </div>
        
        
  
        
      </div>
      </div>
    
    </div>
   
    
  );
};

export default CompanyLogInPage;

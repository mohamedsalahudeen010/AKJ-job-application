import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useContext,useState } from "react";
import "./CompanySignUp.css";
import Spinner from "react-bootstrap/esm/Spinner";
import { AKJContext } from "../../Context";  

const signUpValidation = yup.object({
  companyName: yup.string().required("Enter Your First Name"),
  logo: yup.string().required("Enter Your Last Name"),
  email: yup.string().required("Enter an Email"),
  password: yup
    .string()
    .required("Enter Password")
    .min(8, "Enter Minimum eight Characters"),
});

const CompanySignUpPage = () => {
  const navigate = useNavigate();
  const{baseUrl}=useContext(AKJContext)
  const [showSignUp, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        companyName: "",
        logo: "",
        email: "",
        password: "",
      },
      validationSchema: signUpValidation,
      onSubmit: (user) => {
        addUser(user);
      },
    });

  const addUser = async (user) => {
    try {
      const response = await fetch(
        `${baseUrl}/companySignUp`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.message === "SignedUp Successfully") {
        navigate("/loginCompany");
      } else if (data.message === "Email Already Exist") {
        setShow(true);
        setLoader(false);
      } else {
      }
    } catch (error) {
      console.log("Admin LogIn Error : ", error);
    }
  };

  const setLoaderFunction = () => {
    if (
      !values.firstName ||
      !values.logo ||
      !values.email ||
      !values.password
    ) {
      return setLoader(false);
    } else if (
      (errors.email && touched.email) ||
      (errors.password && touched.password)
    ) {
      return setLoader(false);
    } else {
      return setLoader(true);
    }
  };

  return (
      <div className="signUpPage">
     
        <div className='welcome-board-login'>
        Welcome to AKJ Jobs
      </div>
          <div className="Sign_up">
            <form onSubmit={handleSubmit} className="form-signup-user">
            <div className="title-login-user"
            onClick={()=>navigate("/")}>Company SignUp</div>
              <div className="input-div input1">
                <label className="textlabel" htmlFor="firstName">
                  Company Name
                  <span style={{ color: "brown" }}> *</span>
                </label>
                <input
                  className="input-signUp-user "
                  placeholder="Company Name"
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={handleChange}
                  value={values.companyName}
                  onBlur={handleBlur}
                ></input>
              </div>

              <div className="input-div input2">
                <label className="textlabel" htmlFor="lastName">
                  Company Logo
                  <span style={{ color: "brown" }}> *</span>
                </label>
                <input
                  className="input-signUp-user"
                  placeholder="Logo of Company"
                  type="text"
                  id="logo"
                  name="logo"
                  onChange={handleChange}
                  value={values.logo}
                  onBlur={handleBlur}
                ></input>
              </div>
              <div></div>
              {(errors.companyName && touched.companyName) ||
              (errors.logo && touched.logo) ? (
                <div
                  className="row"
                  style={{
                    width: "100%",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  {errors.companyName && touched.companyName ? (
                    <h6
                      className="form-alert-signUp"
                      style={{
                        color: "red",
                        position: "absolute",
                        left: "-25%",
                      }}
                    >
                      {errors.companyName}
                    </h6>
                  ) : (
                    ""
                  )}

                  {errors.logo && touched.logo ? (
                    <h6
                      className="form-alert-signUp"
                      style={{
                        color: "red",
                        float: "right",
                        position: "absolute",
                        left: "25%",
                      }}
                    >
                      {errors.logo}
                    </h6>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}

              <div className="input-div input1">
                <label className="textlabel" htmlFor="email">
                  E.mail
                  <span style={{ color: "brown" }}> *</span>
                </label>
                <input
                  className="input-signUp-user"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                ></input>
              </div>

              <div className="input-div input2">
                <label className="textlabel" htmlFor="password">
                  Password
                  <span style={{ color: "brown" }}> *</span>
                </label>
                <input
                  className="input-signUp-user"
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                ></input>
              </div>

              {(errors.email && touched.email) ||
              (errors.password && touched.password) ? (
                <div
                  className="row"
                  style={{
                    width: "100%",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  {errors.email && touched.email ? (
                    <h6
                      className="form-alert-signUp"
                      style={{
                        color: "red",
                        float: "left",
                        position: "absolute",
                        left: "-25%",
                      }}
                    >
                      {errors.email}
                    </h6>
                  ) : (
                    ""
                  )}

                  {errors.password && touched.password ? (
                    <h6
                      className="form-alert-signUp"
                      style={{
                        color: "red",
                        float: "right",
                        position: "absolute",
                        left: "25%",
                      }}
                    >
                      {errors.password}
                    </h6>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}

             
              <div>
                <button
                  type="submit"
                  className="signUp-btn"
                  onClick={() => setLoaderFunction()}
                >
                  {loader ? (
                    <Spinner animation="border" variant="secondary" size="md" />
                  ) : (
                    "Register"
                  )}
                </button>
                {showSignUp && showSignUp ? (
                  <h6 style={{ color: "red" }}>
                    You have Already Registered, login to enter
                  </h6>
                ) : (
                  ""
                )}
              </div>

              <div className="foot-signUp">
            <p>
              Already have an account? Click Here{" "}
              <span
                onClick={() => {
                  navigate("/loginCompany");
                }}
                className="sup-login"
              >
                Sign in !
              </span>{" "}
              for go to signIn page
            </p>
          </div>
            </form>
          </div>
      </div>

  );
};

export default CompanySignUpPage;
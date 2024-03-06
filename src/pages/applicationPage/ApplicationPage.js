
import "./ApplicationPage.css"
import Button from '@mui/material/Button';
import {  TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup"
import{useFormik} from "formik"
import { useDispatch } from 'react-redux';

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useContext, useEffect, useState } from "react";
import { AKJContext } from "../../Context";
import NavBar from "../../components/NavBar/NavBar";
import { fetchAddJobs } from "../../redux/Jobs/jobsAction";
import { useSelector } from "react-redux";
import { fetchAddApplication } from "../../redux/Application/applicationAction";


const applicationValidationSchema=yup.object({
companyName:yup.string().required("please fill the Company name"),
jobId:yup.string().required("please fill the Job Id"),
role:yup.string().required("please fill the Role of the Job"),
minimumCTC:yup.number().required("please fill the Minimun CTC"),
maximumCTC:yup.number().required("please fill the Maximum CTC"),
location:yup.string().required("please fill the Location of Job"),
applicantEmail:yup.string().required("please fill the Applicant Email"),
applicantName:yup.string().required("please fill the Applicant Name"),
applicantPhone:yup.string().required("please fill the Applicant Phone"),
})

function ApplicationPage() {
  
  const{id}=useParams()
  const{baseUrl}=useContext(AKJContext)
  console.log(id)
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const phone=JSON.parse(localStorage.getItem("data")).phone
 
  let jobs=useSelector((jobs)=>jobs.jobs.jobs.filter((ele)=>ele._id===id))
  console.log(jobs[0])
  const{values,handleChange, handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
        companyName:jobs[0].companyName,
        jobId:jobs[0].jobId,
        role:jobs[0].role,
        minimumCTC:jobs[0].minimumCTC,
        maximumCTC: jobs[0].maximumCTC,
        location:jobs[0].location,
        applicantEmail:localStorage.getItem("email"),
        applicantName:localStorage.getItem("name"),
        applicantPhone:phone
    },
    validationSchema:applicationValidationSchema,
    onSubmit:(newJob)=>{
      console.log("onSubmit triggered",newJob)
      dispatch(fetchAddApplication(baseUrl,newJob))
      navigate("/jobs")
    }
  })

    return(
        
<div className="containers addProducerPage ">
<NavBar/>
    <div className='heading'><h1>Apply</h1></div>
    <div className="input-section">
    <form onSubmit={handleSubmit} className='form-addPage'>
    <TextField  label={touched.companyName && errors.companyName?<p style={{color:"red"}}>
        {errors.companyName}
    </p>:"Enter The Company Name"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.companyName}
     onBlur={handleBlur}
     name= "companyName"
     />
     
     <TextField  label= {touched.jobId && errors.jobId?
    <p style={{color:"red"}}>{errors.jobId}</p>:"Enter Job Id"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.jobId}
     onBlur={handleBlur}
     name= "jobId"
     />

    <TextField  label= {touched.role && errors.role?
    <p style={{color:"red"}}>{errors.role}</p>:"Enter Role of the Job"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '50ch'}}
     onChange={handleChange}
     value={values.role}
     onBlur={handleBlur}
     name= "role"
     />
           
    <TextField 
     label={touched.minimumCTC && errors.minimumCTC?<p style={{color:"red"}}>{errors.minimumCTC}</p>:
     "Enter Minimum CTC" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.minimumCTC}
     onBlur={handleBlur}
     name= "minimumCTC" />
     
     <TextField  
     label={touched.maximumCTC && errors.maximumCTC?<p style={{color:"red"}}>{errors.maximumCTC}</p>:
     "Enter Maximum CTC" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.maximumCTC}
     onBlur={handleBlur}
     name= "maximumCTC" />

     <TextField  
     label={touched.location && errors.location?<p style={{color:"red"}}>{errors.location}</p>:
     "Enter Location of the Job" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.location}
     onBlur={handleBlur}
     name= "location" />

<TextField  
     label={touched.applicantEmail && errors.applicantEmail?<p style={{color:"red"}}>{errors.applicantEmail}</p>:
     "Enter applicant Email" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.applicantEmail}
     onBlur={handleBlur}
     name= "applicantEmail" />

<TextField  
     label={touched.applicantName && errors.applicantName?<p style={{color:"red"}}>{errors.applicantName}</p>:
     "Enter applicant Name" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.applicantName}
     onBlur={handleBlur}
     name= "applicantName" />

<TextField  
     label={touched.applicantPhone && errors.applicantPhone?<p style={{color:"red"}}>{errors.applicantPhone}</p>:
     "Enter applicant Phone" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '50ch'}}
    onChange={handleChange}
     value={values.applicantPhone}
     onBlur={handleBlur}
     name= "applicantPhone" />

    <Button
          className="add-btn"
          color="primary"
          type="submit"
          variant="contained"
          style={{display:"block",textAlign:"center",
        marginLeft:"25%",width:"50%",
      marginTop:"1rem"}}
         
        >
          Apply
        </Button>
        </form>

    </div>
            <Button
            startIcon={<KeyboardBackspaceIcon />}
            variant="contained"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
       </div> 
       
    )
}


export default ApplicationPage
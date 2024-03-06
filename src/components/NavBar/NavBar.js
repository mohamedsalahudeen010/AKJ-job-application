import React, { useContext, useEffect, useState } from 'react'
import "./NavBar.css"
import Collapse from 'react-bootstrap/Collapse';
import Dot from "@iconscout/react-unicons/icons/uil-bars"
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchStudent, fetchUserLogOut } from '../../redux/student/studentAction';
import { AKJContext } from '../../Context';
import { fetchJobs } from '../../redux/Jobs/jobsAction';
import { useSelector } from 'react-redux';
import { UilRupeeSign } from '@iconscout/react-unicons'

function NavBar() {
   const[open,setOpen]=useState(false)
   const[show,setShow]=useState(false)
   const[student,setStudent]=useState("")
   const[credit,setCredit]=useState(0)
   const[company,setCompany]=useState("")
   const navigate=useNavigate()
   const dispatch=useDispatch();
   const{stud,baseUrl}=useContext(AKJContext)
   
   useEffect(()=>{
      if(localStorage.getItem("email")){
         setStudent(localStorage.getItem("name"))
         setCredit(JSON.parse(localStorage.getItem("data")))
       }else if(localStorage.getItem("email-company")){
         setCompany(localStorage.getItem("name-company"))
         setCredit(JSON.parse(localStorage.getItem("data")))
      }
   },[])
   
   const logOut=()=>{
    localStorage.clear();
    setStudent("")
    setCompany("")
    navigate("/")
   }
  return (
   
 <div className='nav-wrapper'>
        <div className='nav-left'>
            <div >
               <div onClick={student?()=>navigate("/studentMain"):company?()=>navigate("/mainCompany"):()=>navigate("/")} className='nav-btn'>AKJ Jobs</div>
            </div>
            {student?<div>{student}</div>:company?<div>{company}</div>:""}
        </div>

        <div className='nav-right'>
                <div className='nav-list'>
                      
                        {student?
                        <ul>
                           <li onClick={()=>navigate("/jobs")}>Jobs</li> 
                           <li onClick={()=>navigate("/companies")}>Companies</li> 
                           <li onClick={()=>navigate("/myApplications")}>Applications</li> 
                          <li onClick={()=>logOut()}>Logout</li> 
                          <li><UilRupeeSign />{credit.credit}</li> 
                        </ul>
                        :company?
                        <ul>
                           <li onClick={()=>navigate("/companyJobs")}>Jobs</li> 
                           <li onClick={()=>navigate("/applications")}>Applications</li> 
                          <li onClick={()=>logOut()}>Logout</li> 
                          <li><UilRupeeSign />{credit.credit}</li> 
                        </ul>
                        :
                        <ul>
                           <li onClick={()=>navigate("/loginStudent")}>
                           Sign In
                        </li>
                         </ul>} 
                        
                    
                    
                     
                </div>
         
            
                    
        </div>
        <div className='nav-check'>
          <input type="checkbox" id="check-land" name="" value="" style={{display:"none"}}></input>
          <label htmlFor='check-land' className='check-label'
          style={open?{transform:"rotate(90deg)",transition:"all 0.6s"}:
          {transform:"rotate(0deg)",transition:"all 0.6s"}}><Dot
          onClick={()=>setOpen(!open)} size={"2.5rem"}/></label>
        </div>

        <div className='land-dot-list'>
        <Collapse in={open}>
        <div id="example-collapse-text" className='view-nav-list'>
          
          
          {
            student?
            <ul>
                           <li onClick={()=>navigate("/jobs")}>Jobs</li> 
                           <li onClick={()=>navigate("/companies")}>Companies</li> 
                           <li onClick={()=>navigate("/myApplications")}>Applications</li> 
                          <li onClick={()=>logOut()}>Logout</li> 
                          <li><UilRupeeSign />{credit.credit}</li> 
            </ul>
            :company?
            <ul>
                <li onClick={()=>navigate("/companyJobs")}>Jobs</li> 
                <li onClick={()=>navigate("/applications")}>Applications</li> 
                <li onClick={()=>logOut()}>Logout</li> 
                <li><UilRupeeSign />{credit.credit}</li> 
            </ul>:
            <ul>
                <li onClick={()=>navigate("/loginStudent")}>
                           Sign In
                        </li>
            </ul>
          } 
        </div>
      </Collapse>
      </div>
    </div>
  
   
  )
}

export default NavBar
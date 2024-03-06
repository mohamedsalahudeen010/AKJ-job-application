import React, { useContext, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { fetchJobs, fetchJobsAd } from '../../redux/Jobs/jobsAction'
import { AKJContext } from '../../Context'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import JobCard from '../../components/jobCard/JobCard'
import "./JobsCompany.css"
import SearchBar from '../../components/searchBar/SearchBar'
import { useNavigate } from 'react-router-dom'

function JobsCompany() {
const {baseUrl}=useContext(AKJContext)
const jobs=useSelector((jobs)=>jobs.jobs.jobs)
const navigate=useNavigate()
const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchJobsAd(baseUrl))
    },[])
  return (
    <div>
        <NavBar/>
       <div className='jobStudent'>
        <div className='welcome-board-login'>Jobs</div>
        <div> <button className="add-btn" onClick={()=>navigate("/addJobs")}>
      Add Jobs
    </button></div>
        <div className='jobs'>
        {jobs.length>0?jobs.map((jobs)=>(<JobCard job={jobs} key={jobs._id}/>
        )):<div className='no-job'>No Jobs</div>}
        </div>
       
       </div>
        </div>
  )
}

export default JobsCompany
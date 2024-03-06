import React, { useContext, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { fetchJobs } from '../../redux/Jobs/jobsAction'
import { AKJContext } from '../../Context'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import JobCard from '../../components/jobCard/JobCard'
import "./JobsStudent.css"
import SearchBar from '../../components/searchBar/SearchBar'

function JobsStudent() {
const {baseUrl}=useContext(AKJContext)
const jobs=useSelector((jobs)=>jobs.jobs.jobs)

const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchJobs(baseUrl))
    },[])
  return (
    <div><NavBar/>
       <div className='jobStudent'>
        <div className='welcome-board-login'>Jobs For You</div>
        <SearchBar/>
        <div className='jobs'>
        {jobs&&jobs.map((jobs)=>(<JobCard job={jobs} key={jobs._id}/>))}
        </div>
       
       </div>
        </div>
  )
}

export default JobsStudent
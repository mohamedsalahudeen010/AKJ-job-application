import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useSelector } from 'react-redux'
import ApplicationCard from '../../components/applicationCard/ApplicationCard'

function MyApplications() {
  const application=useSelector((app)=>app.applications.applications)
  console.log(application)
  return (
    <div style={{marginTop:"7rem"}}>
        <NavBar/>
        <div className='welcome-board-login'>
        My Applications
      </div>
        {
          application&&application.map((ele)=>(
            <ApplicationCard app={ele}/>
          ))
        }
    </div>
  )
}

export default MyApplications
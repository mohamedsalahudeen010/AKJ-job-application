import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function JobCard({job}) {
  const[student,setStudent]=useState("")
   const[company,setCompany]=useState("")
  useEffect(()=>{
    if(localStorage.getItem("email")){
       setStudent(localStorage.getItem("name"))
     }else if(localStorage.getItem("email-company")){
       setCompany(localStorage.getItem("name-company"))

    }
 },[])
 
    const navigate=useNavigate()
  return (
    <div className='job-card'>
         <Card>
      <Card.Header as="h5">Company : {job.companyName}</Card.Header>
      <Card.Body>
      <div className='row'>
        <div className='col card'>
        <Card.Title>Job Title : {job.role}</Card.Title>
        <Card.Text>
       Minimum CTC : {job.minimumCTC}
        </Card.Text>
        <Card.Text>
       Maximum CTC : {job.maximumCTC}
        </Card.Text>
        <Card.Text>
      Location : {job.location}
        </Card.Text>
        <Card.Text>
      Posted At : {job.date.slice(0,10)}
        </Card.Text>
        
        
      
        </div>
        {student?<div className='col'>
        <Button variant="primary"
        onClick={()=>navigate(`/application/${job._id}`)}>Apply Job</Button>
        </div>:""}
        </div>
        </Card.Body>
    </Card>
    </div>
  )
}

export default JobCard
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "./applicationCard.css"
function ApplicationCard({app}) {
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
    <div className='application-card'>
         <Card>
      <Card.Header as="h5">Company : {app.companyName}</Card.Header>
      <Card.Body>
      <div className='row'>
        <div className='col card'>
        <Card.Title>Job Title : {app.role}</Card.Title>
        <Card.Text>
       Minimum CTC : {app.minimumCTC}
        </Card.Text>
        <Card.Text>
       Maximum CTC : {app.maximumCTC}
        </Card.Text>
        <Card.Text>
      Location : {app.location}
        </Card.Text>
        
        
        
      
        </div>
       
        </div>
        </Card.Body>
    </Card>
    </div>
  )
}

export default ApplicationCard
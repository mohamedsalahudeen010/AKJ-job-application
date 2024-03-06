import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useSelector } from 'react-redux'
import CompCard from '../../components/CompCard/CompCard'
import "./MainCompany.css"
function MainCompany() {
  const companies=useSelector((comp)=>comp.companies.companies)
  console.log(companies)
  return (
    <div className='Main_Comp'>
        <NavBar/>
        <div className='heading'><h1>Companies</h1></div>
    <div className='row '>
        {companies&&companies.map((comp)=>(
             <div key={comp._id} className='col'>
             <CompCard
             name={comp.companyName}
             img={comp.logo}
             gender={comp.gender}
             dob={comp.dob}
             summary={comp.bio}
            
             />
         </div>
        ))}
    </div> 
     
    </div>
  )
}

export default MainCompany
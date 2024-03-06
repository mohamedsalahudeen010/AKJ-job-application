
import React, { createContext, useState } from 'react'
export const AKJContext=createContext(null)


function Context(props) {
     
    const [openCom, setOpenCom] = useState(false);
    const [openLand, setOpenLand] = useState(false);
    const[stud,setStud]=useState("")
    const[comp,setComp]=useState("")
    const baseUrl="https://akj-job-app-server-1.onrender.com"
  return (
    <AKJContext.Provider value={{openCom,setOpenCom,openLand,setOpenLand,baseUrl,stud,setStud,comp,setComp}}>
        {props.children}
    </AKJContext.Provider>
  )
}

export default Context

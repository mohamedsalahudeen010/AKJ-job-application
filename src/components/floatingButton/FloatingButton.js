import React from 'react'
import "./FloatingButton.css"
import { useNavigate } from 'react-router-dom'

function FloatingButton({navi,name}) {
  const navigate=useNavigate()
  return (
    <div className='floating-div'>
        
            <div type="" className='float'
            onClick={()=>(navigate(navi))}>{name}</div>
       
    </div>
  )
}

export default FloatingButton
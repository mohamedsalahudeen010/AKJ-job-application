

export const fetchStudentRequest=()=>{
    return{
        type:"FETCH_STUDENT_REQUEST"
    }
}

export const fetchStudentSuccess=(data)=>{
    return{
        type:"FETCH_STUDENT_SUCCESS",
        payload:data
    }
}
export const fetchStudentLogOut=(data)=>{
    return{
        type:"FETCH_STUDENT_LOGOUT",
       
    }
}

export const fetchStudentFailure=(error)=>{
    return{
        type:"FETCH_STUDENT_FAILURE",
        payload:error
    }
}

export const fetchStudent=(baseUrl,email)=>{
    return async (dispatch)=>{
        
        dispatch(fetchStudentRequest())
        try {
            const response=await fetch(`${baseUrl}/studentLogin/one`,{
                method:"POST",
                body: JSON.stringify(email),
                headers: {
                    "Content-Type": "application/json",
                  },
            })
            const data=await response.json()
            localStorage.removeItem("data")
            localStorage.setItem("data",JSON.stringify(data.student));
            dispatch(fetchStudentSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchStudentFailure(error.message))
        }
    }
}


export const fetchUpdateCreditStudent=(baseUrl,application)=>{
   
    return async (dispatch)=>{
        // dispatch(updateApplication(application))
        
        try {
            const response=await 
            fetch(`${baseUrl}/studentLogin/credit`,{
                method:"POST",
                body:JSON.stringify(application),
                headers:{
                    "Content-Type":"application/json",
              
                 }
            })
            const data=await response.json()
           
        } catch (error) {
            console.log(error)
           
        }
    }
}

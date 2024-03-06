
export const fetchApplicationRequest=()=>{
    return{
        type:"FETCH_APPLICATION_REQUEST"
    }
}

export const fetchApplicationSuccess=(data)=>{
    return{
        type:"FETCH_APPLICATION_SUCCESS",
        payload:data
    }
}

export const fetchApplicationFailure=(error)=>{
    return{
        type:"FETCH_APPLICATION_FAILURE",
        payload:error
    }
}
 
 export const addApplication=(data)=>{
    
     return{
         type:"ADD_APPLICATION",
         payload:data
     }
 }
 export const updateApplication=(data)=>{
    
    return{
        type:"UPDATE_APPLICATION",
        payload:data
    }
}
 
 export const deleteOneApplication=(actor)=>{
 
     return{
         type:"DELETE_ONE_APPLICATION",
         payload:actor
     }
 }
 
 export const deleteAllApplication=()=>{
     return{
         type:"DELETE_ALL_APPLICATION",
         
     }
 }
 
export const fetchApplications=(baseUrl,email)=>{
    console.log(email)
    return async (dispatch)=>{
        dispatch(fetchApplicationRequest())
        try {
            const response=await fetch(`${baseUrl}/application?email=${email}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchApplicationSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchApplicationFailure(error))
        }
    }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add Application >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchAddApplication=(baseUrl,application)=>{
    return async (dispatch)=>{
        dispatch(addApplication(application))     
        try {
            const response=await fetch(`${baseUrl}/application`,{
                method:"POST",
                body:JSON.stringify(application),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
          
        } catch (error) {
            console.log(error)
           
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Update Application >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchUpdateApplication=(baseUrl,application)=>{
   
    const id=application._id
    return async (dispatch)=>{
        dispatch(updateApplication(application))
        
        try {
            const response=await 
            fetch(`${baseUrl}/actorAdmin/${id}`,{
                method:"PUT",
                body:JSON.stringify(application),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("admin-token")
                 }
            })
            const data=await response.json()
           
        } catch (error) {
            console.log(error)
           
        }
    }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete one Application >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchdeleteOneApplication=(baseUrl,id)=>{
    
    
    return async (dispatch)=>{
        try {
            dispatch(deleteOneApplication(id))
            const response=await fetch(`${baseUrl}/actorAdmin/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-company")
                 }
            })
            const data=await response.json()
            console.log("DELETE",data)
            
        } catch (error) {
            console.log(error)
           
        }
    }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Actor >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteWholeApplication=(baseUrl)=>{
    
    
    return async (dispatch)=>{
        try {
           dispatch(deleteAllApplication())
            const response=await fetch(`${baseUrl}/actorAdmin`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-company")
                 }
            })
            const data=await response.json()
            
            console.log(data)
        } catch (error) {
            console.log(error)
           
        }
    }
}

export const fetchJobsRequest=()=>{
    return{
        type:"FETCH_JOBS_REQUEST"
    }
}

export const fetchJobsSuccess=(data)=>{
    return{
        type:"FETCH_JOBS_SUCCESS",
        payload:data
    }
}

export const fetchJobsFailure=(error)=>{
    return{
        type:"FETCH_JOBS_FAILURE",
        payload:error
    }
}
export const addJob=(data)=>{
    
    return{
        type:"ADD_JOBS",
        payload:data
    }
}
export const updateJobs=(data)=>{
   
   return{
       type:"UPDATE_JOBS",
       payload:data
   }
}

export const deleteOneJobs=(data)=>{

    return{
        type:"DELETE_ONE_JOBS",
        payload:data
    }
}

export const deleteAllJobs=()=>{
    return{
        type:"DELETE_ALL_JOBS",
        
    }
}

export const fetchJobs=(baseUrl)=>{
    console.log(baseUrl)
    return async (dispatch)=>{ 
        dispatch(fetchJobsRequest())
        console.log(baseUrl)
        try {
            const response=await fetch(`${baseUrl}/jobs`,{
                method:"GET",
                headers:{
                    "x-auth-token":localStorage.getItem("token")
                }
            })
            const data=await response.json()

            dispatch(fetchJobsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchJobsFailure(error))
        }
    }
}

export const fetchJobsAd=(baseUrl)=>{
    console.log(baseUrl)
    
   let company= localStorage.getItem("name-company")
    return async (dispatch)=>{
        dispatch(fetchJobsRequest())
        console.log(baseUrl)
        try {
            const response=await fetch(`${baseUrl}/jobAd?company=${company}`,{
                method:"GET",
                headers:{
                    "x-auth-token":localStorage.getItem("token-company")
                }
            })
            const data=await response.json()

            dispatch(fetchJobsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchJobsFailure(error))
        }
    }
}


export const fetchAddJobs=(baseUrl,job)=>{
    return async (dispatch)=>{
        dispatch(addJob(job))     
        try {
            const response=await fetch(`${baseUrl}/jobAd`,{
                method:"POST",
                body:JSON.stringify(job),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-company")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
          
        } catch (error) {
            console.log(error)
           
        }
    }
}

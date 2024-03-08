
export const fetchCompanyRequest=()=>{
    return{
        type:"FETCH_COMPANY_REQUEST"
    }
}

export const fetchCompanySuccess=(data)=>{
    return{
        type:"FETCH_COMPANY_SUCCESS",
        payload:data
    }
}

export const fetchCompanyFailure=(error)=>{
    return{
        type:"FETCH_COMPANY_FAILURE",
        payload:error
    }
}

export const fetchCompanies=(baseUrl)=>{
    
    return async (dispatch)=>{
        dispatch(fetchCompanyRequest())
       
        try {
            const response=await fetch(`${baseUrl}/company`,{
                method:"GET",
                headers:{
                    "x-auth-token":localStorage.getItem("token")
                }
            })
            const data=await response.json()
            localStorage.removeItem("data")
            localStorage.setItem("data",JSON.stringify(data.company));
            dispatch(fetchCompanySuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchCompanyFailure(error))
        }
    }
}


export const fetchUpdateCreditCompany=(baseUrl,application)=>{
   
    return async (dispatch)=>{
        // dispatch(updateApplication(application))
        
        try {
            const response=await 
            fetch(`${baseUrl}/company/credit`,{
                method:"POST",
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




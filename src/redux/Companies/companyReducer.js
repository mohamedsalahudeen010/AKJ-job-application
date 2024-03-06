

const initialState={
    loading:true,
    companies:[],
    error:""
}

const companyReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_COMPANY_REQUEST":return{
            loading:true,
            companies:[],
             error:""
        }
        case "FETCH_COMPANY_SUCCESS":return{
            loading:false,
            companies:action.payload,
            error:""
        }
        case "FETCH_COMPANY_FAILURE":return{
            loading:false,
            companies:[],
            error:action.payload
        }
        default : return state
    }
}


export default companyReducer



const initialState={
    loading:true,
    jobs:[],
    error:""
}

const jobsReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_JOBS_REQUEST":return{
            loading:true,
            jobs:[],
             error:""
        }
        case "FETCH_JOBS_SUCCESS":return{
            loading:false,
            jobs:action.payload,
            error:""
        }
        case "FETCH_JOBS_FAILURE":return{
            loading:false,
            jobs:[],
            error:action.payload
        }
        default : return state
    }
}


export default jobsReducer

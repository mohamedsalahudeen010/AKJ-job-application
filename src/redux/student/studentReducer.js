

const initialState={
    loading:true,
    student:[],
    error:""
}

const studentReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_STUDENT_REQUEST":return{
            loading:true,
            student:[],
             error:""
        }
        case "FETCH_STUDENT_SUCCESS":return{
            loading:false,
            student:action.payload,
            error:""
        }
        case "FETCH_STUDENT_FAILURE":return{
            loading:false,
            student:[],
            error:action.payload
        }
        case "FETCH_STUDENT_LOGOUT":return{
            loading:false,
            student:[],
            error:action.payload
        }
        default : return state
    }
}


export default studentReducer

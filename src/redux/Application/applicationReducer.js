

const initialState={
    loading:true,
    applications:[],
    error:""
}

const applicationReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_APPLICATION_REQUEST":return{
            loading:true,
            applications:[],
             error:""
        }
        case "FETCH_APPLICATION_SUCCESS":return{
            loading:false,
            applications:action.payload,
            error:""
        }
        case "FETCH_APPLICATION_FAILURE":return{
            loading:false,
            applications:[],
            error:action.payload
        }
        case "ADD_APPLICATION":
            const alreadyExists = state.applications.filter(
                (item) => item.name === action.payload.name
              );
        
              if (!alreadyExists) {
                return {
                  ...state.applications,...action.payload
                  
                };
              } 
              else {
                return {
                  ...state,
                  
                };
              }
              case "UPDATE_APPLICATION" :
                return{
                    ...state.applications,...action.payload
            }
        case "DELETE_ONE_APPLICATION":
            return {
              ...state,
              actors: state.applications.filter(
                (item) => item._id !== action.payload
              ),
            }

            case "DELETE_ALL_APPLICATION":
              return {
                loading:true,
                applications:[],
                error:""
                
              }
        default : return state
    }
}


export default applicationReducer

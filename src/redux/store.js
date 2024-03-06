import {createStore} from "redux"

import { combineReducers } from "redux"
import { applyMiddleware } from "redux"
import logger from "redux-logger"
import {composeWithDevTools} from "@redux-devtools/extension"
import {thunk} from "redux-thunk"

import jobsReducer from "./Jobs/jobsReducer.js"
import studentReducer from "./student/studentReducer.js"
import companyReducer from "./Companies/companyReducer.js"
import applicationReducer from "./Application/applicationReducer.js"


const reducer=combineReducers({
student:studentReducer,
jobs:jobsReducer,
companies:companyReducer,
applications:applicationReducer

})

 const store = createStore(reducer,
   composeWithDevTools(applyMiddleware(thunk)) )

 export default store
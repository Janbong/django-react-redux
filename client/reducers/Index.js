import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"

import authReducer from './authReducer'
import flashMessageReducer from './flashMessageReducer'
import signUpReducer from './signUpReducer'
const rootReducer = combineReducers({
    auth: authReducer, 
    flashMessage: flashMessageReducer, 
    signUp: signUpReducer, 
    routing: routerReducer
})
export default rootReducer

import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import messenger from "./messenger";


const reducers = combineReducers({
    user,
    users,
    messenger,
})


export default reducers
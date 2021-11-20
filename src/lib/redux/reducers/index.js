
import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import messenger from "./messenger";
import post from "./post"


const reducers = combineReducers({
    post,
    user,
    users,
    messenger,
})


export default reducers

import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import messenger from "./messenger";
import post from "./post"
import meet from "./meet"


const reducers = combineReducers({
    post,
    user,
    users,
    messenger,
    meet,
})


export default reducers
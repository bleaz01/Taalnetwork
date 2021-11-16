import {createStore,compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducers from "../reducers"


// @ts-ignore
const composeEnhancer = +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
|| compose

export default function configStore(){
    return createStore(
        reducers,
        composeEnhancer(applyMiddleware(thunk))

    );
}
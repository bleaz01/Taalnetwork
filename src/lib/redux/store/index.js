import {createStore,compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducers from "../reducers"
import {composeWithDevTools} from 'redux-devtools-extension'

// @ts-ignore
const composeEnhancer = +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
|| compose

export default function configStore(){
    return createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk))

    );
}
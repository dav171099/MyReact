import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
     initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }

}
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializeApp =() => (dispatch) => {
     let promise = dispatch(authMe())
     promise.then(() => {
         dispatch(initializedSuccess())
     })
    }

export default appReducer;
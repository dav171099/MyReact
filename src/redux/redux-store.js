import {applyMiddleware, createStore} from "redux";
import { combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducer = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
    }
);


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
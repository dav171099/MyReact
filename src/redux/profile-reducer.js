import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts:[
        {id: 1, message: 'Hi, how are you?', count: 15},
        {id: 2, message: 'It\'s my first post', count: 25}
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostText
            return ( {
                ...state,
                posts: [...state.posts, {id: 5, count: 0 ,message: newPost}]
            })
        case SET_STATUS:
            return ({
                ...state,
                status : action.status,
            })
        case SET_USER_PROFILE:{
            return ({
                ...state, profile: action.profile,
            })
        }
        default:
            return state;
    }
}
export const addPost = (newPostText) => ({type: ADD_POST , newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUsers =(userId) => {
    return (dispatch) => {
        usersAPI.setUser(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
    }
}
export const getStatus = (userId) => (dispatch) =>{
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })}
export const updateStatus =(status) => (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }});
}
export default profileReducer;
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs : [
        {id: 1, name: 'David'},
        {id: 2, name: 'Hamayak'},
        {id: 3, name: 'Vardanik'},
        {id: 4, name: 'Hamazasp'},
        {id: 5, name: 'Anbrnasbos'}
    ],
    messages: [
        {id: 1, message: 'Hi bro'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Its Ok, thank you'},
        {id: 4, message: 'By By'},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText
            return({
                ...state,
                messages: [...state.messages, {id:5, message: newMessage}]
            })
        default:
            return state;
    }

}
export const addMessage = (newMessageText) => ({type: ADD_MESSAGE , newMessageText})

export default dialogsReducer;
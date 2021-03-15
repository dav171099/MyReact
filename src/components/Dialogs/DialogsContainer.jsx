import React from "react";
import {addMessage} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    addMessage : (newMessageText) => {
        dispatch(addMessage(newMessageText))
    }}
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
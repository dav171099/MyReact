import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {
    let DialogsElement = props.dialogsPage.dialogs.map( d => <DialogsItem name={d.name} key={d.id} id={d.id}/> )
    let MessagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id}/> )
    let newMessageText = props.newMessageText
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div className={s.addMessage}>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    debugger
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} validate={[required, maxLength50]} name="newMessageText" placeholder="New Message Text" cols="60" rows="4" />
        <button className={s.button}>Send</button>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogForm'})(AddMessageForm)

export default Dialogs;
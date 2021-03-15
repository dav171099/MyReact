import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} validate={[required]}  name={'email'} placeholder={"Email"}/>
        </div>
        <div>
            <Field component={Input} validate={[required]} type="password" name={'password'} placeholder={"Password"}/>
        </div>
        <div>
            <Field component={Input} name={'rememberMe'}  type={"checkbox"}/>Remember Me
        </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
    <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

let mapStateToProps = (state) => {
    return {
    isAuth: state.auth.isAuth
    }}


export default connect(mapStateToProps, {login, logout})(Login)
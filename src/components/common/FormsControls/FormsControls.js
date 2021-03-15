import React from "react";
import s from "./FormsControls.module.css"

const FormsControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div className={(hasError ? s.error : "")}>
                {props.children}
            </div>
            <div>
                {hasError && <span className={s.errorText}>
                    {meta.error}
                </span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}>
            <textarea {...input} {...restProps} />
           </FormsControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}>
        <input {...input} {...restProps} />
    </FormsControl>
}
import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";




const MyPosts = (props) => {
    let PostsElement = props.posts.map( p => <Post key={p.id} message={p.message} count={p.count}/> );
    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
           <h3>My Posts</h3>
            <div>
                <MyPostReduxForm onSubmit={addNewPost} />
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    );
};
const maxLength10 = maxLengthCreator(10);
const MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newPostText" validate={[required, maxLength10]}
                  cols="60" rows="3" /> <br/>
        <button className={s.button}>Add Post</button>
    </form>
}

const MyPostReduxForm = reduxForm({form: 'addPost'})(MyPostForm)

export default MyPosts;

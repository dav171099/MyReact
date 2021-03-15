import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"/>
                {props.message}
                <div className={s.count}>
                    {props.count} <span>Like</span>
                </div>
            </div>
        </div>

    );
};

export default Post;

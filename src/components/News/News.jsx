import s from './News.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News = (props) => {
    return (
        <div className={s.content}>
            News
        </div>
    );
}

export default withAuthRedirect(News);
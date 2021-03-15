import s from './Music.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = (props) => {
    return (
        <div>
            Music
        </div>
    );
}

export default withAuthRedirect(Music);
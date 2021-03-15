import s from './Settings.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings = (props) => {
    return (
        <div>
            Settings
        </div>
    );
}

export default withAuthRedirect(Settings);
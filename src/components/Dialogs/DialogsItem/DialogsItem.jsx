import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>

            <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}>
                <img src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"/>
                {props.name} </NavLink>
        </div>
    );
}

export default DialogsItem;
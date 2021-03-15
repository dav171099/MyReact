import s from './Sidebar.module.css';
import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";


const Sidebar = (props) => {
    let friendsElements = props.friends.map( f => <FriendsItem key={f.id} id={f.id} name={f.name} />)
    return(
        <div className={s.sidebar}>
           {friendsElements}
        </div>
    )
}

export default Sidebar;
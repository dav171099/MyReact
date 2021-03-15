import s from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const FriendsItem = (props) =>{

    return(

        <div className={s.friend}>
            <NavLink to={'/friends/'+ props.id}> {props.name}  <br/>
            <img
            src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"/>
            </NavLink>
        </div>
    )
};
export default FriendsItem;

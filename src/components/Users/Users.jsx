import React from 'react';
import s from './users.module.css'
import userPhoto from "./../../assets/img/avatar.png"
import {NavLink} from "react-router-dom";


const Users = (props) => {
    {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span key={p.id} className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p} - </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.usersPage}>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                        <div className={s.usersText}>
                            <div className={s.userinfo}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>

                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress
                                        .some(id => id === u.id)} className={s.button} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress
                                        .some(id => id === u.id)} className={s.button} onClick={() => {props.follow(u.id)}}>Follow</button>}

                            </div>
                        </div>

                    </div>
                </div>)}
        </div>

    }
}

export default Users;
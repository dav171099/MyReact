import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://lh5.googleusercontent.com/proxy/2ekRBrQydtmgg-8koxz6BEnkcy8GrNl71PMyVwdCQSIDitcfiKhtGGQ9K0pAckPPtcJIMHJS3eztF6Rurb6DRCKho8Hstyp_NVO6m1EyyQwwCL0Fqz9y3voqOT1nfX7nL9Z5klgwaZjZaiTrFrUJoMAj7ZUSnuSyS9B41dsZkU0C2k6aJuw2bWulvIT6u8Ra=s0-d" />
        <div className={s.loginBlock}>
            {props.isAuth?
                <div> {props.login} - <button onClick={props.logout}>Log Out</button></div>
                :<NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    );
}

export default Header;
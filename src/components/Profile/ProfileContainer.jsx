import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUsers, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.setUsers(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }


}

let mapStateToProps = (state) => {
   return{
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
}}

export default compose(
    withAuthRedirect,
    connect (mapStateToProps, {setUsers, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)

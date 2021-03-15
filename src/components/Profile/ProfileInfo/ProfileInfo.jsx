import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import Preloader from "../../common/preloader/preloader";
import React from "react";
import ProfileStatusWhithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>

            <div className={s.img1}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={s.ava}>
                <img
                    src={props.profile.photos.large}/>

                <div className={s.description}>
                    <div>
                        <h2>{props.profile.fullName}</h2>
                        <h3><ProfileStatusWhithHooks status={props.status} updateStatus={props.updateStatus}/></h3>
                        <h3>{props.profile.lookingForAJob}</h3>
                        <h3>{props.profile.lookingForAJobDescription}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;

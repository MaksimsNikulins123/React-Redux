import React from 'react';
import classes from './UserInfo.module.css';
import PreLoader from '../../usersList/preloader/PreLoader';

const UserInfo = (props) => {
    // debugger;

    
    if(!props.profile){
        return(
            <PreLoader />
        )
    }

    return(
        <div className={classes.item}>
            <div className={classes.userlogo}>
                <img src={props.profile.photos.small}  alt="small profile"/>
            </div>
            <div className={classes.description}>
                <div className={classes.userInfo}>
                    <div className={classes.userInfoType}>
                        User Name: <span>{props.profile.fullName == null ? "not existed" : props.profile.fullName}</span>
                    </div>
                    <div className={classes.userInfoType}>
                        About Me: <span>{props.profile.aboutMe == null ? "not existed" : props.profile.aboutMe}</span>
                    </div> 
                    <div className={classes.userInfoType}>
                        Looking For A Job: <span>{props.profile.lookingForAJob ? "Yes" : "No"}</span>
                    </div>
                    <div className={classes.userInfoType}>
                        Looking For A Job Description: <span>{props.profile.lookingForAJobDescription == null ? "not existed" : props.profile.lookingForAJobDescription}</span>
                    </div>
                </div>
                <div className={classes.contacts}>
                    <div>
                        Contacts:
                    </div>
                    <div className={classes.contactsBody}>
                        <div className={classes.contactType}>
                            facebook:<span>{props.profile.contacts.facebook == null ? "not existed" : props.profile.contacts.facebook}</span>
                        </div>
                        <div className={classes.contactType}>
                            website:<span>{props.profile.contacts.website == null ? "not existed" : props.profile.contacts.website}</span>
                        </div>
                        <div className={classes.contactType}>
                            vk:<span>{props.profile.contacts.vk == null ? "not existed" : props.profile.contacts.vk}</span>
                        </div>
                        <div className={classes.contactType}>
                            twitter:<span>{props.profile.contacts.twitter == null ? "not existed" : props.profile.contacts.twitter}</span>
                        </div>
                        <div className={classes.contactType}>
                            instagram:<span>{props.profile.contacts.instagram == null ? "not existed" : props.profile.contacts.instagram}</span>
                        </div>
                        <div className={classes.contactType}>
                            youtube:<span>{props.profile.contacts.youtube == null ? "not existed" : props.profile.contacts.youtube}</span>
                        </div>
                        <div className={classes.contactType}>
                            github:<span>{props.profile.contacts.github == null ? "not existed" : props.profile.contacts.github}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserInfo;
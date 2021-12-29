import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfileActionCreator} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';


class ProfileClass extends React.Component {
    
    componentDidMount() {
        // debugger;
        let userId = this.props.match.params.userId;
        if(!userId)
        {
            userId = this.props.authUserId;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                // console.log(response.data)
                this.props.setUserProfile(response.data)
              
            });
    }
    
    render() {
        // debugger;
        return(
            <Profile  {...this.props} profile={this.props.profile} />
        )
    }
    
}

let mapStateToProps = (state) => {
// debugger;
    return{
        profile: state.profilePage.profile,
        authUserId: state.auth.id
    }

}

let WithUrlContainerComponent = withRouter(ProfileClass);


// const ProfileContainer = connect(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(ProfileClass)
const ProfileContainer = connect(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(WithUrlContainerComponent)


export default ProfileContainer;



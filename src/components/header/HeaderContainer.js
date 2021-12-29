import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from "./Header";

class HeaderComponent extends React.Component {

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/auth/me`, 
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "70add02e-a4e4-47b8-b7fd-34d69ec0a09d"
                        }
                    },
                
                )
            .then(response => {
                // debugger;
                // console.log(response.data)
                if(response.data.resultCode === 0)
                {
                    let {id, email, login} = response.data.data;
                    // this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
                    this.props.setAuthUserData({id, email, login});
                }
                // console.log(response.data)
                // this.props.setUserProfile(response.data)
              
            });
    }


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
);

export default connect(mapStateToProps, {setAuthUserData})(HeaderComponent);
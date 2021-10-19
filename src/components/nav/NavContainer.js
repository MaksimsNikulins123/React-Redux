import Nav from "./Nav";
import { connect } from "react-redux";

let mapStateToProps = (state) => {

    return {
        friends: state.sidebarTopFriends.friends
    }
}

let mapDispatchToProps = () => {
    return{
        
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav); 


export default NavContainer;
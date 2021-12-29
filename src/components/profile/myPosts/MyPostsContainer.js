import MyPosts from './MyPosts';
import { connect } from "react-redux";

let mapStateToProps = (state) => {

    return {
        postData: state.profilePage.postData
    }
}

let mapDispatchToProps = () => {
    return{
        
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 

export default MyPostsContainer;
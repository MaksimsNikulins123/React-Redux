import LoadedUsers from "./loadedUsers/LoadedUsers";
import UserPagination from "./userPagination/UserPagination";
import PreLoader from '../preloader/PreLoader';

const UserPage = (props) => {
    
    return  <>
                { 
                    props.isLoadingUsersPage 
                    ? 
                    <PreLoader />
                    : 
                    [
                        <UserPagination 
                            pages={props.pages}
                            currentPage={props.currentPage}
                            onChangePage={props.onChangePage}
                            paginationBack={props.paginationBack}
                            paginationNext={props.paginationNext}
                        />,
                    
                        props.isLoadingUsersOnPagination 
                        ? 
                        <PreLoader />
                        : 
                        <LoadedUsers
                            users={props.users}
                            follow={props.follow}
                            unfollow={props.unfollow}
                        />
                    ]
                   
                } 
            </>
}

export default UserPage;
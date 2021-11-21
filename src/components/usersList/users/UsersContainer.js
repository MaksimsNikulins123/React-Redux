import React from 'react';
import { connect } from 'react-redux';
import { 
    followActionCreator, 
    setUsersActionCreator, 
    unFollowActionCreator, 
    setCurrentPageActionCreator, 
    setUsersTotalCountActionCreator,
    setTotalPagesCountActionCreator,
    setPagesListActionCreator,
    toggleIsLoadingUsersPageActionCreator,
    toggleisLoadingUsersOnPaginationActionCreator

} from '../../redux/users-reducer';
import * as axios from 'axios';
import UserPage from '../userPage/UserPage';



class UsersClass extends React.Component {

    componentDidMount() {
        
        this.props.toggleIsLoadingUsersPage(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoadingUsersPage(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
                this.getPages(response.data.totalCount, this.props.pageSize);
            });
    }
   
    onChangePage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleisLoadingUsersOnPagination(true)
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleisLoadingUsersOnPagination(false)
            this.props.setUsers(response.data.items)
        });
    }

    getPages = (usersTotalCount, pageSize) => {
        console.log(this.props.users[0].photos.large)
        let pages = Math.ceil(usersTotalCount / pageSize);

        this.props.setTotalPagesCount(pages);

        let pagesArray = [];
        if(pages > 5 ){
            for (let index = 1; index <= 5; index++) {
                pagesArray.push(index); 
            }
        }else {
            pagesArray.push([1]);   
        }
        this.props.setPagesList(pagesArray)
    }
        
    paginationBack = () => {
        let pagesArrayFirstValue = this.props.pages[0];
        let pagesArray = [];
        if(pagesArrayFirstValue >= 6){
            for (let index = pagesArrayFirstValue - 5; index <= pagesArrayFirstValue - 1 ; index++) {
                pagesArray.push(index);
            }
            this.props.setPagesList(pagesArray)
        }
    }

    paginationNext = () => {
        let pagesArrayLastValue = this.props.pages[this.props.pages.length - 1];
        let pagesArray = [];
        for (let index = pagesArrayLastValue + 1; index <= pagesArrayLastValue + 5 && index <= this.props.totalPagesCount; index++) {
            pagesArray.push(index);
            
        }
        this.props.setPagesList(pagesArray)   
    }
    
    render() {
     
        return <UserPage
                pages={this.props.pages}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
                paginationBack={this.paginationBack}
                paginationNext={this.paginationNext}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isLoadingUsersPage={this.props.isLoadingUsersPage}
                isLoadingUsersOnPagination={this.props.isLoadingUsersOnPagination}
                />
       
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        pages: state.usersPage.pages,
        totalPagesCount: state.usersPage.totalPagesCount,
        isLoadingUsersPage: state.usersPage.isLoadingUsersPage,
        isLoadingUsersOnPagination: state.usersPage.isLoadingUsersOnPagination
        
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        },
        setTotalPagesCount: (totalPagesCount) => {
            dispatch(setTotalPagesCountActionCreator(totalPagesCount))
        },
        setPagesList: (pages) => {
            dispatch(setPagesListActionCreator(pages))
        },
        toggleIsLoadingUsersPage: (isLoadingUsersPage) => {
            dispatch(toggleIsLoadingUsersPageActionCreator(isLoadingUsersPage))
        },
        toggleisLoadingUsersOnPagination: (isLoadingUsersOnPagination) => {
            dispatch(toggleisLoadingUsersOnPaginationActionCreator(isLoadingUsersOnPagination))
        }
       
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;
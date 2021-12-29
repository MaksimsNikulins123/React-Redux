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

} from '../../../redux/users-reducer';
import * as axios from 'axios';
import UserPage from '../userPage/UserPage';
// import { getUsers } from '../../../api/api';

// let currentPagesArray;


class UsersClass extends React.Component {

 
    

    componentDidMount() {
        // debugger;
        

        // let pagesList = this.props.pages;
        if(this.props.currentPage === 1)
        {
            this.props.toggleIsLoadingUsersPage(true)
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                    {withCredentials: true}
                    )
            // getUsers(this.props.currentPage, this.props.pageSize)
                .then(response => {
                    // debugger;
                    this.props.toggleIsLoadingUsersPage(false)
                    this.props.setUsers(response.data.items)
                    this.props.setUsersTotalCount(response.data.totalCount)
                    // if(this.props.pages != [])
                    // {
                        this.getPages(response.data.totalCount, this.props.pageSize);
                    // }
                   
                    // this.props.setUsers(response.data.items);
                });
        }
       
    }
    
    onChangePage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleisLoadingUsersOnPagination(true)
        axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
            {withCredentials: true}
            )
        // getUsers(page, this.props.pageSize)
        .then(response => {
            this.props.toggleisLoadingUsersOnPagination(false)
            this.props.setUsers(response.data.items)
            // this.props.setPagesList(this.props.pages)
            // this.props.setUsers(response.data.items)

        });
    }

    getPages = (usersTotalCount, pageSize) => {
        // debugger;
        let pages = Math.ceil(usersTotalCount / pageSize);

        this.props.setTotalPagesCount(pages);

        let pagesArray = [];
        if(pages > 5 ){
            for (let index = 1; index <= 5; index++) {
                // let key = index;
                // pagesArray.push({pageNumber: index, key: key}); 
                pagesArray.push(index);
                // currentPagesArray.push(index);
            }
        }else {
            // pagesArray.push({pageNumber: 1, key: 1});   
            pagesArray.push([1]);
            // currentPagesArray.push([1]);   
        }
        // currentPagesArray = pagesArray;
        // if(this.props.pages = [])
        // {
            this.props.setPagesList(pagesArray);
        // }
        
        
    }
        
    paginationBack = () => {
        let pagesArrayFirstValue = this.props.pages[0];
        let pagesArray = [];
        if(pagesArrayFirstValue >= 6){
            for (let index = pagesArrayFirstValue - 5; index <= pagesArrayFirstValue - 1 ; index++) {
                pagesArray.push(index);
                // currentPagesArray.push(index);
            }
            this.props.setPagesList(pagesArray)
        }
        // currentPagesArray = pagesArray;
    }

    paginationNext = () => {
        // debugger;
        let pagesArrayLastValue = this.props.pages[this.props.pages.length - 1];
        let pagesArray = [];
        for (let index = pagesArrayLastValue + 1; index <= pagesArrayLastValue + 5 && index <= this.props.totalPagesCount; index++) {
            pagesArray.push(index);
            // currentPagesArray.push(index);
        }
        // currentPagesArray = pagesArray;
        this.props.setPagesList(pagesArray)  
        
        // debugger;
    }
    
    render() {
    //  debugger;
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followActionCreator(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unFollowActionCreator(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageActionCreator(page))
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCountActionCreator(totalCount))
//         },
//         setTotalPagesCount: (totalPagesCount) => {
//             dispatch(setTotalPagesCountActionCreator(totalPagesCount))
//         },
//         setPagesList: (pages) => {
//             dispatch(setPagesListActionCreator(pages))
//         },
//         toggleIsLoadingUsersPage: (isLoadingUsersPage) => {
//             dispatch(toggleIsLoadingUsersPageActionCreator(isLoadingUsersPage))
//         },
//         toggleisLoadingUsersOnPagination: (isLoadingUsersOnPagination) => {
//             dispatch(toggleisLoadingUsersOnPaginationActionCreator(isLoadingUsersOnPagination))
//         }
       
//     }
// }

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);



const UsersContainer = connect(
    mapStateToProps,
    {
        follow: followActionCreator,
        unfollow:unFollowActionCreator,
        setUsers: setUsersActionCreator,
        // setPages: setPagesActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        setUsersTotalCount: setUsersTotalCountActionCreator,
        setTotalPagesCount: setTotalPagesCountActionCreator,
        setPagesList: setPagesListActionCreator,
        toggleIsLoadingUsersPage: toggleIsLoadingUsersPageActionCreator,
        toggleisLoadingUsersOnPagination: toggleisLoadingUsersOnPaginationActionCreator
    } 
    )(UsersClass);

export default UsersContainer;
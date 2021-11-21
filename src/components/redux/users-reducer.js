const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const SET_TOTAL_PAGE_COUNT = 'SET-TOTAL-PAGE-COUNT'
const DEFAULT_PAGES = 'DEFAULT-PAGES'
const TOGGLE_IS_LOADING_USERS_PAGE = 'TOGGLE-IS-LOADING-USERS-PAGE'
const TOGGLE_IS_LOADING_SELECTED_USERS_ON_PAGINATION = 'TOGGLE-IS-LOADING-SELECTED-USERS-ON-PAGINATION'


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    totalPagesCount: 0,
    pages: [],
    isLoadingUsersPage: false,
    isLoadingUsersOnPagination: false
    
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userID) 
                    {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            }
           
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userID) 
                    {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount,
            }

        case DEFAULT_PAGES:
            return {
                ...state,
                pages: action.pages
            }

        case SET_TOTAL_PAGE_COUNT:
            return {
                ...state,
                totalPagesCount: action.totalPagesCount
            }

        case TOGGLE_IS_LOADING_USERS_PAGE:
            return {
                ...state,
                isLoadingUsersPage: action.isLoadingUsersPage
            }

        case TOGGLE_IS_LOADING_SELECTED_USERS_ON_PAGINATION:
            return {
                ...state,
                isLoadingUsersOnPagination: action.isLoadingUsersOnPagination
            }

        default:
            return state;
    }

}

export const followActionCreator = (userId) => {
    return{
        type: FOLLOW,
        userID: userId
    } 
}

export const unFollowActionCreator = (userId) => {
    return{
        type: UNFOLLOW,
        userID: userId
    } 
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setUsersTotalCountActionCreator = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount: totalCount
    }
}

export const setPagesListActionCreator = (pages) => {
    return {
        type: DEFAULT_PAGES,
        pages: pages
    }
}

export const setTotalPagesCountActionCreator = (totalPagesCount) => {
    return {
        type: SET_TOTAL_PAGE_COUNT,
        totalPagesCount: totalPagesCount
    }
}

export const toggleIsLoadingUsersPageActionCreator = (isLoadingUsersPage) => {
    return {
        type: TOGGLE_IS_LOADING_USERS_PAGE,
        isLoadingUsersPage: isLoadingUsersPage
    }
}

export const toggleisLoadingUsersOnPaginationActionCreator = (isLoadingUsersOnPagination) => {
    return {
        type: TOGGLE_IS_LOADING_SELECTED_USERS_ON_PAGINATION,
        isLoadingUsersOnPagination: isLoadingUsersOnPagination
    }
}


export default usersReducer;
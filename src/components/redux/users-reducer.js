const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        // { 
        //     id: 1,
        //     avatar: 'https://assets.webiconspng.com/uploads/2016/11/avatar_boy_child_kid_male_user_young_icon_403024.png',
        //     followed: true,
        //     name: 'Den', 
        //     status: "I'm boss",
        //     location: {
        //         city: 'Riga',
        //         country: 'Latvia'
        //     },
            
        // },
        // { 
        //     id: 2, 
        //     avatar: 'https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png',
        //     followed: false,
        //     name: 'Aleks', 
        //     status: "Got you",
        //     location: {
        //         city: 'Moscow',
        //         country: 'Russia'
        //     },
            
        // },
        // { 
        //     id: 3, 
        //     avatar: 'https://homevest.com/wp-content/uploads/2019/05/matureman1-512.png',
        //     followed: true,
        //     name: 'Dany', 
        //     status: "You mine",
        //     location: {
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     },
            
        // }  
    ]
    
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
                users: [...state.users, ...action.users]
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

export default usersReducer;
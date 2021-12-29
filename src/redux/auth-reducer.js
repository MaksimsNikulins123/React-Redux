const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false   
}

const authReducer = (state = initialState, action) => {
    // debugger;
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true  
            }
           
        

        default:
            return state;
    }

}

export const setAuthUserData = (data) => {
    // debugger;
    return {
        type: SET_USER_DATA,
        data: data
    }

}


export default authReducer;
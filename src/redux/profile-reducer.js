const ADD_POST = 'ADD-POST';
const UPDATE_TEXAREA_TEXT = 'UPDATE-TEXTAREA-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postData: [
        { 
            id: 0, 
            message: 'Hi!', 
            likesCount: '0' },
        { 
            id: 1, 
            message: 'How are you?', 
            likesCount: '23' }  
    ],
    textareaText: '',
    profile: null
    
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: 
            let newPost = {
                key: state.postData.length,
                id: state.postData.length,
                message: state.textareaText,
                likesCount: 0
            };
            return{
                ...state,
                postData: [...state.postData, newPost ],
                textareaText: ''
            }

        case UPDATE_TEXAREA_TEXT: 

            return{
                ...state,
                textareaText: action.newText
            }
        
        case SET_USER_PROFILE:

            return{
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_TEXAREA_TEXT,
        newText: text
    }
}

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export default profileReducer;
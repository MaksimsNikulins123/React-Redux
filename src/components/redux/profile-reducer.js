const ADD_POST = 'ADD-POST';
const UPDATE_TEXAREA_TEXT = 'UPDATE-TEXTAREA-TEXT';

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
    
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            let newPost = {
                key: state.postData.length,
                id: state.postData.length,
                message: state.textareaText,
                likesCount: 0
            };
            let copyState = {...state}
            copyState.postData = [...state.postData]
            copyState.postData.push(newPost)
            copyState.textareaText = ''
            return copyState;
        }
        case UPDATE_TEXAREA_TEXT: {
            let copyState = {...state}
            copyState.textareaText = action.newText
            return copyState;
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

export default profileReducer;
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXAREA_MESSAGE_TEXT = 'UPDATE-TEXAREA-MESSAGE-TEXT';
const GET_USER_TOPIC = 'GET-USER-TOPIC';


let initialState = {
    userDialogId: {},
    dialogsData: [
        { 
            id: 0, 
            key: 0,
            name: 'Alex', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png', 
            messageData: [
                { id: 0, key:0, message: 'How are you?'},
                { id: 1, key:1, message: 'What are you doing?'},
                { id: 2, key:2, message: 'Great'}
            ],
            answerData: [
                { id: 0, key:0, answer:'Fine' },
                { id: 1, key:1, answer:'I am learning React' },
                { id: 2, key:2,  answer:'And you?' }
            ],
            textareaText: ''
        },
        { 
            id: 1, 
            key: 1,
            name: 'Max', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png',
            messageData: [
                { id: 0, key:0, message: 'Hi Max'},
                { id: 1, key:1, message: 'Where you were?'},
                { id: 2, key:2, message: 'Me too'}
            ],
            answerData: [
                { id: 0, key:0, answer:'Hi' },
                { id: 1, key:1, answer:'I was away' },
                { id: 2, key:2, answer:'Cool'  }
            ],
            textareaText: ''
        },  
        { 
            id: 2, 
            key: 2,
            name: 'Deniss', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png',
            messageData: [
                { id: 0, key:0, message: 'How are you?', answer:'Fine' },
                { id: 1, key:1, message: 'What are you doing?', answer:'I am learning React' },
                { id: 2, key:2, message: 'Great', answer:'And you?' }
            ],
            answerData: [
                { id: 0, key:0, answer:'Fine' },
                { id: 1, key:1, answer:'I am learning React' },
                { id: 2, key:2, answer:'And you?' }
            ],
            textareaText: ''
        }, 
        { 
            id: 3,
            key: 3, 
            name: 'Jane', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png',
            messageData: [
                { id: 0, key:0, message: 'How are you?', answer:'Fine' },
                { id: 1, key:1, message: 'What are you doing?', answer:'I am learning React' },
                { id: 2, key:2, message: 'Great', answer:'And you?' }
            ],
            answerData: [
                { id: 0, key:0, answer:'Fine' },
                { id: 1, key:1, answer:'I am learning React' },
                { id: 2, key:2, answer:'And you?' }
            ],
            textareaText: ''
        },
        { 
            id: 4, 
            key: 4,
            name: 'Piter', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png',
            messageData: [
                { id: 0, key:0, message: 'How are you?', answer:'Fine' },
                { id: 1, key:1, message: 'What are you doing?', answer:'I am learning React' },
                { id: 2, key:2, message: 'Great', answer:'And you?' }
            ],
            answerData: [
                { id: 0, key:0, answer:'Fine' },
                { id: 1, key:1, answer:'I am learning React' },
                { id: 2, key:2, answer:'And you?' }
            ],
            textareaText: ''
        }
    ]  
}

const dialogsReducer = (state = initialState, action) => {
// debugger;
    switch(action.type){
        case GET_USER_TOPIC: 

        return{
            ...state,
            userDialogId: action.userId
        }

        // {
        //     let copyState = {...state};
        //     copyState.userDialogId = action.userId;
        //     return copyState;
            
        // }
        case ADD_MESSAGE: 
        
        {
            let newMessage = {
                id: state.dialogsData[action.userId].messageData.length,
                key: state.dialogsData[action.userId].messageData.length,  
                message: state.dialogsData[action.userId].textareaText,
            };
            let newAnswer = {
                id: state.dialogsData[action.userId].answerData.length, 
                key: state.dialogsData[action.userId].answerData.length,
                answer: "What's up?"
            };
            let copyState = {...state};
            copyState.dialogsData = [...state.dialogsData];
            copyState.dialogsData[action.userId] = {...state.dialogsData[action.userId]};
            copyState.dialogsData[action.userId].messageData = [...state.dialogsData[action.userId].messageData];
            copyState.dialogsData[action.userId].answerData = [...state.dialogsData[action.userId].answerData];
            copyState.dialogsData[action.userId].messageData.push(newMessage);
            copyState.dialogsData[action.userId].answerData.push(newAnswer);
            copyState.dialogsData[action.userId].textareaText = ''; 
            return copyState; 
        }
            
        case UPDATE_TEXAREA_MESSAGE_TEXT:
        
        {
            let copyState = {...state};
            copyState.dialogsData[action.userId].textareaText = action.newMessageText;
            return copyState;

        }
    
        default:
            return state;
    }
}

export const addMessageActionCreator = (userId) => {
   
    return {
        type: ADD_MESSAGE,
        userId: userId
    }
}

export const updateNewMessageTextActionCreator = (text, userId) => {
   
    return {
        type: UPDATE_TEXAREA_MESSAGE_TEXT,
        newMessageText: text,
        userId: userId
    }
}


export const getUserTopicActionCreator = (userId) => {
    return {
        type: GET_USER_TOPIC,
        userId: userId
    }
}

export default dialogsReducer;
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
                { id: 0, key:0, message: 'How are you?', answer:'Fine' },
                { id: 1, key:1, message: 'What are you doing?', answer:'I am learning React' },
                { id: 2, key:2, message: 'Great', answer:'And you?' }
            ],
            textareaText: ''
        },
        { 
            id: 1, 
            key: 1,
            name: 'Max', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png',
            messageData: [
                { id: 0, key:0, message: 'Hi Max', answer:'Hi' },
                { id: 1, key:1, message: 'Where you were?', answer:'I was away' },
                { id: 2, key:2, message: 'Me too', answer:'Cool' }
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
            textareaText: ''
        }
    ]  
}

const dialogsReducer = (state = initialState, action) => {
    
    let userId = action.userId;
    switch(action.type){
        case GET_USER_TOPIC: 
            state.userDialogId = action.topicId;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                key: state.dialogsData[userId].messageData.length,
                id: state.dialogsData[userId].messageData.length, 
                message: state.dialogsData[userId].textareaText,
                answer: "What's up?"
            };
            state.dialogsData[userId].messageData.push(newMessage);
            state.dialogsData[userId].textareaText = '';
            return state;
        case UPDATE_TEXAREA_MESSAGE_TEXT: 
            state.dialogsData[userId].textareaText = action.newMessageText;
            return state;
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


export const getUserTopicActionCreator = (topicId) => {
    return {
        type: GET_USER_TOPIC,
        topicId: topicId
    }
}


export default dialogsReducer;
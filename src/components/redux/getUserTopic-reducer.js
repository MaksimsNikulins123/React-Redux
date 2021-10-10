const GET_USER_TOPIC = 'GET-USER-TOPIC';

let initialState = {
    dialogsData: [
        { 
            id: 0, 
            key: 0,
            name: 'Alex', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png', 
            messageData: [
                { id: 0, key: 0, message: 'How are you?', answer:'Fine' },
                { id: 1, key: 1, message: 'What are you doing?', answer:'I am learning React' },
                { id: 2, key: 2, message: 'Great', answer:'And you?' }
            ],
            textareaText: ''
        },
        { 
            id: 1, 
            key: 1,
            name: 'Max', 
            avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png',
            messageData: [
                { id: 0, key: 0, message: 'Hi Max', answer:'Hi' },
                { id: 1, key: 1, message: 'Where you were?', answer:'I was away' },
                { id: 2, key: 2, message: 'Me too', answer:'Cool' }
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
            lkey: 3, 
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
    ],
   
}

const getUserTopicReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_TOPIC:           
            return state.dialogsData[action.topicId];
        default:
                return state;
    }
}

export const getUserTopicActionCreator = (messageID) => {
    return {
        type: GET_USER_TOPIC,
        topicId: messageID
    }
}

export default getUserTopicReducer;
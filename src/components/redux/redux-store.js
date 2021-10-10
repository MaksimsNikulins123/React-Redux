import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarTopFriendsReducer from "./sidebarTopFriends-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarTopFriends: sidebarTopFriendsReducer,
});



let store = createStore(reducers);


export default store;
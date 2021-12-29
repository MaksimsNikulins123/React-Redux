import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarTopFriendsReducer from "./sidebarTopFriends-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarTopFriends: sidebarTopFriendsReducer,
    usersPage: usersReducer,
    auth: authReducer
});



let store = createStore(reducers);


export default store;
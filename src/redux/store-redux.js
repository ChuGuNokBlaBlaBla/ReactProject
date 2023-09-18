import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogs: dialogsReducer,
        friends: friendsReducer,
    }
})

export default store;
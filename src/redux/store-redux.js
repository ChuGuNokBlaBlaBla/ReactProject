import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

const store = configureStore({
    reducer: {
        dataProfile: profileReducer,
        profilePage: profileReducer ,
        dialogs: dialogsReducer,
        friends: friendsReducer,
        auth: authReducer,
        userId: authReducer,
        status: authReducer,
    }
})

export default store;
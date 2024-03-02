import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";

const store = configureStore({
    reducer: {
        dataProfile: authReducer,
        profilePage: profileReducer,
        dialogs: dialogsReducer,
        friends: friendsReducer,
        auth: authReducer,
        userId: authReducer,
        status: authReducer,
    }
})

export default store;
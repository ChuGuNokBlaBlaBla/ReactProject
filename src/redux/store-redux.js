import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";

const store = configureStore({
    reducer: {
        dataProfile: authReducer,
        profilePage: authReducer,
        auth: authReducer,
        userId: authReducer,
        status: authReducer,
        dialogs: dialogsReducer,
        friends: friendsReducer,
    }
})

export default store;
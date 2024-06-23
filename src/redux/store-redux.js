import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

const store = configureStore({
    reducer: {
        profileReducer: profileReducer,
        dialogsReducer: dialogsReducer,
        friendsReducer: friendsReducer,
        authReducer: authReducer,
    }
})

export default store;
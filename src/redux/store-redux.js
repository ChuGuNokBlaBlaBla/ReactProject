import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReduser from "./dialogsReducer";


const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogs: dialogsReduser,
    }
})

export default store;
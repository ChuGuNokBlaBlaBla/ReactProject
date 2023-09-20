import { configureStore, createSlice } from "@reduxjs/toolkit";

const profileData = {
    dataUserPage: [
        {
            id: '0',
            name: 'Артур Семченко',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen1100f76f4e8987b74901311a50821225.jpg',
            message: 'Сообщение от Артура',
        },
        {
            id: '1',
            name: 'Андрей Пушкарёв',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen0ae453a006ab71a0b90a357edb271688.jpg',
            message: 'Сообщение от Андрея'
        },
        {
            id: '2',
            name: 'Семён Игоревич',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg',
            message: 'Сообщение от Семёна',

        },
        {
            id: '3',
            name: 'Виктор Иванович',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen1180a45e2d8bd4c08325163b067fba97.jpg',
            message: 'Сообщение от Виктора',

        },
    ],
    dataPosts: [
        {
            message: 'Привет, это мой первый пост',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen1100f76f4e8987b74901311a50821225.jpg',
            id: 1,
        },
        {
            message: 'Привет, это мой второй пост',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen0ae453a006ab71a0b90a357edb271688.jpg',
            id: 2,
        },
        {
            message: 'Привет, это мой третий пост',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg',
            id: 3,
        },
        {
            message: 'Привет, это мой четвёртый пост',
            src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg',
            id: 4,
        },
    ],
    valueTextPost: '',
    activeUser: null,    
}
const profileReducer = createSlice({
    name: 'profilePage',
    initialState: {...profileData},
    reducers: {
        newPost(state, action) {
            state.dataPosts = [...state.dataPosts]
            state.dataPosts.push({
                message: state.valueTextPost,
                src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
            })
            state.valueTextPost = '';
        },
        changeText(state, action) {
            state.valueTextPost = action.payload
        },
        setUser(state, action) {
            
            state.activeUser = action.payload
            // state.activeUser = {...action.payload}
        }
    }
})

let store = configureStore(profileReducer)

window.store = store

export const {newPost, changeText, setUser} = profileReducer.actions;

export default profileReducer.reducer
import { createSlice } from "@reduxjs/toolkit";

const profileData = {
    myData: {
        aboutMe: "я обычный парень",
        lookingForAJob: "в поиске новых знаний",
        fullName: "Старый",
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://naked-science.ru/wp-content/uploads/2016/04/article_supercoolpics_01_10072012124623.jpg"
        },
        statusProfile: 'Тут должен быть статус',
        statusMessage: 'Какой-то статус',
        editMode: false,
    },
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
    ]
}
const profileReducer = createSlice({
    name: 'profilePage',
    initialState: { ...profileData },
    reducers: {
        newPost(state, action) {
            state.dataPosts.push({
                message: action.payload.mySentPost,
                src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
            })
            state.valueTextPost = '';
        },
        changeStatus(state, action) {
            state.status = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        changeEditMode(state, action) {
            state.myData.editMode = action.payload
        },
        changeStatusMessage(state, action) {
            state.myData.status = action.payload
        },
    }
})

export const { newPost, changeStatus, setStatus, changeEditMode, changeStatusMessage } = profileReducer.actions;

export default profileReducer.reducer
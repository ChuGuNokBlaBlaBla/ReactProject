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
        }
    ],
    sectionPost: {
        fildName: 'mySentPost',
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
        ]
    }

}
const profileReducer = createSlice({
    name: 'profilePage',
    initialState: { ...profileData },
    reducers: {
        newPost(state, action) {
            state.sectionPost.dataPosts.push({
                message: action.payload.mySentPost,
                src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg'
            })
            state.valueTextPost = '';
        }
    }
})

export const { newPost, changeStatus, setStatus, changeEditMode, changeStatusMessage } = profileReducer.actions;

export default profileReducer.reducer
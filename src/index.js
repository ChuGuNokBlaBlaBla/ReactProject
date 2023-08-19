import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let listFriends = [
  {
      name: 'Артур Семченко',
      src: 'https://this-person-does-not-exist.com/img/avatar-gen1100f76f4e8987b74901311a50821225.jpg',
      message: 'Сообщение от Артура',
      id: '1'
  },
  {
      name: 'Андрей Пушкарёв',
      src: 'https://this-person-does-not-exist.com/img/avatar-gen0ae453a006ab71a0b90a357edb271688.jpg',
      message: 'Сообщение от Андрея',
      id: '2'
  },
  {
      name: 'Семён Игоревич',
      src: 'https://this-person-does-not-exist.com/img/avatar-gen132c625df08d5bc57176a3d215d69dd6.jpg',
      message: 'Сообщение от Семёна',
      id: '3'
  },
  {
      name: 'Виктор Иванович',
      src: 'https://this-person-does-not-exist.com/img/avatar-gen1180a45e2d8bd4c08325163b067fba97.jpg',
      message: 'Сообщение от Виктора',
      id: '4'
  },

]

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App listFriends={listFriends} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

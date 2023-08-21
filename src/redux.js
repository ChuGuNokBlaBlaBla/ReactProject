import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from './state/state'
import {changeTextPost} from './state/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderDOM = (dataApp)=> {
   root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={dataApp} addPost={addPost} changeTextPost={changeTextPost}/>
    </BrowserRouter>
  </React.StrictMode>
); 
}


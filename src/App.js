import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Messages from './components/Messages/Messages.jsx';
import Header from './components/header/Header.jsx';
import ProfileBlock from './components/myProfile/ProfileBlock.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Friends from './components/Friends/Friends';

function App(props) {
  return (
    <div className="wrap-app">
      <Header />
      <div className="app">
        <Sidebar />
        <div className='wrap-workspace'>
          <Routes>
            <Route path='/profile' element={ <ProfileBlock />} />
            <Route path='/messages' element={ <Messages listFriends={props.listFriends} />} />
            <Route path='/my_friends' element={ <Friends listFriends={props.listFriends} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;

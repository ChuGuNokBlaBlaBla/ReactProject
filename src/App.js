import { Route, Routes } from 'react-router-dom';
import './App.css';
import Messages from './components/Messages/Messages.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import ContainerProfile from './components/myProfile/ContinerProfile/ContainerProfile';
import ContainerProfileFriend from './components/Friends/RenderFriend/ContainerProfileFriend';
import ContainerFriendsRender from './components/Friends/ContainerFriendsRender';
import HeaderContainer from './components/header/HeaderContainer';
import ContainerAuthMe from './components/Auth/AuthMe';

function App(props) {
  return (
    <div className="wrap-app">
      <HeaderContainer />
      <div className="app">
        <Sidebar />
        <div className='wrap-workspace'>
          <Routes>
            <Route path='/login/' element={<ContainerAuthMe />} />
            <Route path='/profile/' element={<ContainerProfile />} />
            <Route path='/friends/page/:id' element={<ContainerProfileFriend />} />
            <Route path='/my_friends/' element={<ContainerFriendsRender />} />
            <Route path='/messages/' element={<Messages />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;

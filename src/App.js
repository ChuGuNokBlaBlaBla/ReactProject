import { Route, Routes } from 'react-router-dom';
import './App.css';
import Messages from './components/Messages/Messages.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import ContainerConnectComponentProfile from './components/Profile/ContinerProfile/ContainerProfile';
import ContainerProfileFriend from './components/Friends/RenderFriend/ContainerProfileFriend';
import HeaderContainer from './components/header/HeaderContainer.jsx';
import ContainerAuthMe from './components/Auth/AuthMe';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { myLogin } from './redux/authReducer.js';
import { compose } from 'redux';
import FriendsRender from './components/Friends/FriendUser/FriendsRender.jsx';

const mapStateToProps = (state) => {
  return {
    authMe: state.authReducer.authMe,
  }
}

const App = (props) => {

  useEffect(() => {
    props.myLogin()
  }, [props.authMe])

  return (
    <div className="wrap-app">
      <HeaderContainer />
      <div className="app">
        <Sidebar />
        <div className='wrap-workspace'>
          <Routes>
            <Route path='/login/' element={<ContainerAuthMe />} />
            <Route path='/profile/' element={<ContainerConnectComponentProfile />} />
            <Route path='/friends/page/:id' element={<ContainerProfileFriend />} />
            <Route path='/my_friends/' element={<FriendsRender />} />
            <Route path='/messages/' element={<Messages />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { myLogin }) (App)
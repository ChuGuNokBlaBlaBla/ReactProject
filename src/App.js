import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Messages from './components/Messages/Messages.jsx';
import Header from './components/header/Header.jsx';
import ProfileBlock from './components/myProfile/ProfileBlock.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Friends from './components/Friends/Friends';

function App() {
  return (
    <div className="wrap-app">
      <Header />
      <div className="app">
        <Sidebar />
        <div className='wrap-workspace'>
          <Routes>
            <Route path='/profile' Component={ProfileBlock} />
            <Route path='/messages' Component={Messages} />
            <Route path='/my_friends' Component={Friends} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;

import './App.css';
import Header from './components/header/Header';
import BlockProfile from './components/my-profile/contentOnMyProfile';
import SideBar from './components/sider-bar/sideBar';

function App() {
  return (
    <div className="wrap-app">
      <Header />
      <SideBar />
      <BlockProfile />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header/Header';
import ProfileBlock from './components/myProfile/ProfileBlock';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="wrap-app">
      <Header />
      <Sidebar />
      <ProfileBlock />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navbar';
import Profile from './components/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navigation/>
      <Profile/>

    </div>
  );
};

export default App;


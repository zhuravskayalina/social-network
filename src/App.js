import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>

            {/*<Profile name="Britney"/>*/}
            <Dialogs/>

        </div>
    );
};

export default App;


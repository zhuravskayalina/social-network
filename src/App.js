import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <main className='app-wrapper-content'>
                <Routes>
                <Route path="/messages" element={<Dialogs/>}/>
                <Route path="/profile" element={<Profile name="Britney"/>}/>
                {/*<Profile name="Britney"/>*/}
                </Routes>


            </main>


        </div>
        </BrowserRouter>
    );
};

export default App;


import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";



const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <main className='app-wrapper-content'>
                <Routes>
                <Route path="/messages" element={<Messages state={props.state.messagesPage}/> }/>
                <Route path="/profile" element={<Profile name="Britney"
                                                         state={props.state.profilePage}
                                                         updateNewPostText={props.updateNewPostText}
                                                         addPost={props.addPost}/>}/>
                </Routes>
            </main>
        </div>
        </BrowserRouter>
    );
};

export default App;


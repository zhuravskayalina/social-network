import c from "./MessageWindow.module.css";
import Conversation from './Conversation/Conversation';
import Header from "../MessagesHeader/Header";
import Footer from "../MessagesFooter/Footer";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const MessageWindow = (props) => {

    return (
        <div className={c.messages}>
            <Header name={'Timothee Chalamet'}/>

            <Conversation messagesData={props.messagesData} messagesTextData={props.messagesTextData}/>

            <Footer/>
        </div>)
};

export default MessageWindow;
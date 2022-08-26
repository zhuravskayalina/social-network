import c from "./DialogueWindow.module.css";
import Conversation from '../Conversation/Conversation';
import Header from "../MessagesHeader/Header";
import Footer from "../MessagesFooter/Footer";

const DialogueWindow = (props) => {
    return (<div className={c.dialogue}>
        <Header name={'Timothee Chalamet'}/>
        <Conversation/>
        <Footer/>
    </div>)
};

export default DialogueWindow;
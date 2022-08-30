import c from './Messages.module.css';
import NameList from "./NameList/NameList";
import MessageWindow from "./MessageWindow/MessageWindow";
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    const path = '/messages/' + props.id;
    return (
        <NavLink className={c.navlink} to={path}>
            <li className={c.dialogueItem}>
                <div className={c.dialoguePhoto}></div>
                <div className={c.dialogueContent}>
                    <div className={c.dialogueInfo}>
                        <div className={c.name}>{props.name}</div>
                        <div className={c.date}></div>
                    </div>
                    <div className={c.messageText}>
                        <div className={c.text}></div>
                        <div className={c.newMessagesCount}></div>
                    </div>
                </div>
            </li>
        </NavLink>
    )
};

const Messages = () => {

    const messagesData = [
        {id: 1, name: "Channing Tatum"},
        {id: 2, name: "Timothee Chalamet"},
        {id: 3, name: "Florence Pugh"},
        {id: 4, name: "Lindsay Lohan"},
        {id: 5, name: "Madonna"},
        {id: 6, name: "Joe Biden"},
        {id: 7, name: "Zoe Kravitz"},
        {id: 8, name: "Zhenya Ranetka"},
        {id: 9, name: "Joe Campbell Bower"},
    ];

    const messagesElements = messagesData.map((person => {
        return (
            <DialogItem id={person.id} name={person.name}/>
        );
    }));

    return (
        <div className={c.wrap}>
            <ul className={c.messagesList}>
                { messagesElements }
            </ul>

            <MessageWindow name={'Timothee Chalamet'}/>

        </div>
    )
}

export default Messages;

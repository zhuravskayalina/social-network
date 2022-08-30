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
    return (
        <div className={c.wrap}>
            <ul className={c.messagesList}>
                <DialogItem id="1" name="Channing Tatum"/>
                <DialogItem id="2" name="Timothee Chalamet"/>
                <DialogItem id="3" name="Florence Pugh"/>
                <DialogItem id="4" name="Lindsay Lohan"/>
                <DialogItem id="5" name="Madonna"/>
                <DialogItem id="6" name="Joe Biden"/>
                <DialogItem id="7" name="Zoe Kravitz"/>
                <DialogItem id="7" name="Zhenya Ranetka"/>
                <DialogItem id="9" name="Joe Campbell"/>
            </ul>

            <MessageWindow name={'Timothee Chalamet'}/>

        </div>
    )
}

export default Messages;

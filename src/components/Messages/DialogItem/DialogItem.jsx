import {NavLink} from "react-router-dom";
import c from "./DialogItem.module.css";

const DialogItem = (props) => {
    const path = '/messages/' + props.id;
    return (
        <NavLink className={c.navlink} to={path}>
            <li className={c.dialogueItem}>
                <div className={c.dialoguePhoto}></div>
                <div className={c.dialogueContent}>
                    <div className={c.dialogueInfo}>
                        <div className={c.name}>{props.name}</div>
                        <div className={c.date}>today</div>
                    </div>
                    <div className={c.messageText}>
                        <div className={c.text}>
                            Do you believe in ghosts?
                        </div>
                        <div className={c.newMessagesCount}>1</div>
                    </div>
                </div>
            </li>
        </NavLink>
    )
};

export default DialogItem;
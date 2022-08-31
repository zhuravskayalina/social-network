import c from './Messages.module.css';
import MessageWindow from "./MessageWindow/MessageWindow";
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {

    const messagesElements = (props.messagesData).map((person => {
        return (
            <DialogItem id={person.id} name={person.name}/>
        );
    }));

    return (
        <div className={c.wrap}>
            <ul className={c.messagesList}>
                { messagesElements }
            </ul>

            <MessageWindow name={'Timothee Chalamet'} messagesData={props.messagesData} messagesTextData={props.messagesTextData}/>

        </div>
    )
}

export default Messages;

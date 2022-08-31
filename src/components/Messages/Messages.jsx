import c from './Messages.module.css';
import MessageWindow from "./MessageWindow/MessageWindow";
import DialogItem from "./DialogItem/DialogItem";

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

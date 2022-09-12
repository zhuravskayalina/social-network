import c from './Messages.module.css';
import MessageWindow from "./MessageWindow/MessageWindow";
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {
    //props.state = {
    //         messagesData: [
    //             {id: 1, name: "Channing Tatum"},
    //             {id: 2, name: "Timothee Chalamet"},
    //             {id: 3, name: "Florence Pugh"},
    //             {id: 4, name: "Lindsay Lohan"},
    //             {id: 5, name: "Madonna"},
    //             {id: 6, name: "Joe Biden"},
    //             {id: 7, name: "Zoe Kravitz"},
    //             {id: 8, name: "Zhenya Ranetka"},
    //             {id: 9, name: "Joe Campbell Bower"},
    //         ],

    const dialogsElements = (props.state.messagesData).map((person => {
        return (
            <DialogItem id={person.id} name={person.name}/>
        );
    }));

    return (
        <div className={c.wrap}>
            <ul className={c.messagesList}>
                { dialogsElements }
            </ul>

            <MessageWindow name={'Timothee Chalamet'} messagesData={props.state.messagesData} messagesTextData={props.state.messagesTextData}/>

        </div>
    )
}

export default Messages;

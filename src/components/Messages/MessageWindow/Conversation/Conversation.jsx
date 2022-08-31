import c from './Conversation.module.css';
import Message from "./Message/Message";

const Conversation = (props) => {

    const messagesElements = (props.messagesTextData).map(message => {
        return (
            <Message message={message.text}/>
        );
    });

    return (
        <main className={c.main}>
            <div className={c.messages}>
                {
                    messagesElements
                }
            </div>
        </main>)
};

export default Conversation;
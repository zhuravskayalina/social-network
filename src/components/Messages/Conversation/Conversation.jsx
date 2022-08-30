import c from './Conversation.module.css';

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    );
};

const messagesData = [
    {id: 1, text: 'hi how is it going'},
    {id: 1, text: 'did ya know michael jackson is alive'},
    {id: 2, text: 'fine..'},
    {id: 2, text: 'frankly i knew it'},
];

const messagesElements = messagesData.map(message => {
    return (
        <Message message={message.text}/>
    );
});

const Conversation = () => {
    return (
        <main className={c.main}>
            <div className={`${c.messages} ${c.otherPersonMessages}`}>
                {
                    messagesElements
                }
            </div>
        </main>)
};

export default Conversation;
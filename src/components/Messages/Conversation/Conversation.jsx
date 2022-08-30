import c from './Conversation.module.css';

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    );
};

const messagesData = [
    {id: 1, message: 'hi how is it going'},
    {id: 1, message: 'did ya know michael jackson is alive'},
    {id: 2, message: 'fine..'},
    {id: 2, message: 'frankly i knew it'},
];

const Conversation = () => {
    return (
        <main className={c.main}>
            <div className={`${c.messages} ${c.otherPersonMessages}`}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
            <div className={`${c.messages} ${c.pageOwnerMessages}`}>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </main>)
};

export default Conversation;
import c from './Conversation.module.css';

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    );
};

const Conversation = () => {
    return (
        <main className={c.main}>
            <div className={`${c.messages} ${c.otherPersonMessages}`}>
                <Message message="hi how is it going?"/>
                <Message message="did ya know michael jackson is alive"/>

            </div>
            <div className={`${c.messages} ${c.pageOwnerMessages}`}>
                <Message message="fine.."/>
                <Message message="frankly i knew it"/>

            </div>
        </main>)
};

export default Conversation;
import c from './Conversation.module.css';

const Conversation = () => {
    return (
        <main className={c.main}>
            <div className={c.messages}>
                <div className={c.message}>Hi how are you</div>
                <div className={c.message}>Did ya know Michael Jackson is Alive? Confirmed by government</div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>fine..</div>
                <div className={c.message}>Wait WHAT</div>
            </div>
        </main>)
};

export default Conversation;
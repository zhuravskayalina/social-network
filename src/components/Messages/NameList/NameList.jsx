import c from './NameList.module.css';

const NameList = (props) => {
    return (
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
    )
};

export default NameList;
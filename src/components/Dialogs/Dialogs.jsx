import c from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={c.wrap}>
            <ul className={c.dialoguesList}>

                {/*вынести в отд компонент*/}

                <li className={c.dialogueItem}>
                    <div className={c.dialoguePhoto}></div>
                    <div className={c.dialogueContent}>
                        <div className={c.dialogueInfo}>
                            <div className={c.name}></div>
                            <div className={c.date}></div>
                        </div>
                        <div className={c.messageText}>
                            <div className={c.text}></div>
                            <div className={c.newMessagesCount}></div>
                        </div>
                    </div>
                </li>

                <li className={c.dialogueItem}></li>
                <li className={c.dialogueItem}></li>
                <li className={c.dialogueItem}></li>
                <li className={c.dialogueItem}></li>
                <li className={c.dialogueItem}></li>
                <li className={c.dialogueItem}></li>
                <li className={c.dialogueItem}></li>
                <li className={c.dialogueItem}></li>
            </ul>

            {/*вынести в отдельный компонент*/}

            <div className={c.dialogue}>
                <div className={c.header}>
                    <div className={c.photo}></div>
                    <div className={c.info}>
                        <div className={c.name}></div>
                        <div className={c.conversationMenu}></div>
                    </div>
                </div>

                <div className={c.main}>
                    <div className={c.message}></div>
                </div>
                <div className={c.footer}>
                    <div className={c.newMessage}></div>
                    <div className={c.menu}></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

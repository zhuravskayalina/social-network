import c from "./DialogueWindow.module.css";

const DialogueWindow = (props) => {
    return (<div className={c.dialogue}>
            <div className={c.header}>
                <img className={c.photo}
                     src='https://i.pinimg.com/originals/d3/a5/a0/d3a5a0c8bde242890ea4f1d7ee16b18b.jpg'></img>

                <div className={c.infoWindow}>
                   <div className={c.info}>
                       <p className={c.name}>{props.name}</p>
                       <p className={c.status}>Typing...</p>
                   </div>
                    <div className={c.menu}>
                        <div className={c.menuItem}>call</div>
                        <div className={c.menuItem}>info</div>
                        <div className={c.menuItem}>...</div>
                    </div>
                </div>

            </div>


            <div className={c.main}>
                <div className={c.message}></div>
                <div className={c.message}></div>
                <div className={c.message}></div>
                <div className={c.message}></div>
            </div>


            <div className={c.footer}>
                <div className={c.newMessage}></div>
                <div></div>
            </div>
        </div>)
};

export default DialogueWindow;
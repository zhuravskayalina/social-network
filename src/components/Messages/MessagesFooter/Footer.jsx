import c from './Footer.module.css';
import React from "react";

const Footer = () => {
    const newMessage = React.createRef();
    function sendMessage () {
        const text = newMessage.current.value;
        alert(text);
    };

    return (
        <div className={c.footer}>
            <div className={c.newMessage}>
                <textarea ref={newMessage} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={sendMessage}>send</button>
            </div>
            <div className={c.attachments}>
                attach
            </div>
        </div>
    )
};

export default  Footer;
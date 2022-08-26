import c from './Footer.module.css';

const Footer = () => {
    return (
        <div className={c.footer}>
            <div className={c.newMessage}>
                <p>Type your message here..</p>
            </div>
            <div className={c.attachments}>
                attach
            </div>
        </div>
    )
};

export default  Footer;
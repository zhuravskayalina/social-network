import c from './Messages.module.css';
import NameList from "./NameList/NameList";
import MessageWindow from "./MessageWindow/MessageWindow";
import {NavLink} from 'react-router-dom';

const Messages = () => {
    return (
        <div className={c.wrap}>
            <ul className={c.messagesList}>
                <NavLink to='/messages/1'>
                    <NameList name={'Channing Tatum'}/>
                </NavLink>
                <NavLink to='/messages/2'>
                    <NameList name={'Timothee Chalamet'}/>
                </NavLink>
                <NavLink to='/messages/3'>
                    <NameList name={'Florence Pugh'}/>
                </NavLink>
                <NavLink to='/messages/4'>
                    <NameList name={'Lindsay Lohan'}/>
                </NavLink>
                <NavLink to='/messages/5'>
                    <NameList name={'Madonna'}/>
                </NavLink>
                <NavLink to='/messages/6'>
                    <NameList name={'Joe Bidenx'}/>
                </NavLink>
                <NavLink to='/messages/7'>
                    <NameList name={'Zoe Kravitz'}/>
                </NavLink>
                <NavLink to='/messages/8'>
                    <NameList name={'Zhenya Ranetka'}/>
                </NavLink>
                <NavLink to='/messages/9'>
                    <NameList name={'Hunter Schaffer'}/>
                </NavLink>
            </ul>

            <MessageWindow name={'Timothee Chalamet'}/>

        </div>
    )
}

export default Messages;

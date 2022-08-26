import c from './Dialogs.module.css';
import DialoguesListItem from "./DialoguesListItem/DialoguesListItem";
import DialogueWindow from "./DialogueWindow/DialogueWindow";

const Dialogs = () => {
    return (
        <div className={c.wrap}>
            <ul className={c.dialoguesList}>
                <DialoguesListItem name={'Channing Tatum'}/>
                <DialoguesListItem name={'Timothee Chalamet'}/>
                <DialoguesListItem name={'Florence Pugh'}/>
                <DialoguesListItem name={'Lindsay Lohan'}/>
                <DialoguesListItem name={'Madonna'}/>
                <DialoguesListItem name={'Michael Jackson'}/>
                <DialoguesListItem name={'Zoe Kravits'}/>
                <DialoguesListItem name={'Zhenya Ranetka'}/>
                <DialoguesListItem name={'Hunter Schaffer'}/>
            </ul>
            <DialogueWindow name={'Timothee Chalamet'}/>
        </div>
    )
}

export default Dialogs;

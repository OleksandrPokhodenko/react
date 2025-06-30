import Task from "./Task";
import { useState } from "react";
import OutputBlock from "./OutputBlock";
function Messenger() {
    const [messageList, setMessageList] = useState([])
    return (
        <div className="box">
            <Task />
            <div className="box__body">
                <OutputBlock messageList={messageList} setMessageList={setMessageList} />
            </div>
        </div>
    );
}

export default Messenger;
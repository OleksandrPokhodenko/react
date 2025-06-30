import { useState } from "react";

function InputBlock({ setMessageList }) {
    const [message, setMessage] = useState('')
    function changeList() {
        setMessageList(prevList => [...prevList, { messageItem: message, likes: 0, dislikes: 0 }])
        setMessage('')
    }
    return (
        <div className="box__actions">
            <input placeholder="New message" value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
            <button disabled={!isNaN(message)} className="box__button" onClick={changeList}>Send</button>
        </div>
    );
}

export default InputBlock;
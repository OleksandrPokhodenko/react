import InputBlock from "./InputBlock";
function OutputBlock({ messageList, setMessageList }) {

    const likesNumChange = (index, reaction) => {
        setMessageList(prev => prev.map((el, i) =>
            index === i ? { ...el, [reaction]: el[reaction] + 1 } : el
        ))
    }
    return (
        <div className='box__column'>
            <ul>
                {messageList.map((el, index) => (
                    <li className='box__li' key={index}>
                        {el.messageItem}
                        <div className='box__item'>
                            <button onClick={() => likesNumChange(index, "likes")} className="box__button box__button-small" >
                                <span>👍{el.likes}</span>
                            </button>
                            <button onClick={() => likesNumChange(index, 'dislikes')} className="box__button box__button-small" >
                                <span>👎{el.dislikes}</span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <InputBlock setMessageList={setMessageList} />
        </div>
    )
}

export default OutputBlock;

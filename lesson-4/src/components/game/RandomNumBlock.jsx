function RandomNumBlock({ numList, guessedNumList }) {

    return (
        <div className="box__header">
            <ul className="box__list">
                {numList.map((num, ind) => (
                    <li style={{ color: guessedNumList.includes(num) ? '' : 'transparent' }} className="box__num" key={ind}>
                        {num}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RandomNumBlock;
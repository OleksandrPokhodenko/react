import { useEffect } from "react"
import { useState } from "react"
import { getNumList } from '../../utils/generateNumList'

function GamerBlok({ numList, guessedNumList, setGessedNumList, setNumList }) {
    const [userOneNumList, setUserOneNumList] = useState([])
    const [userOneNum, setUserOneNum] = useState('')
    const [userTwoNumList, setUserTwoNumList] = useState([])
    const [userTwoNum, setUserTwoNum] = useState('')
    const [generalNumsList, setGeneralNumsList] = useState([])
    const [active, setActive] = useState(false)
    const [winner, setWinner] = useState('')
    useEffect(() => {
        if (guessedNumList.length === 3) setWinner(active ? 2 : 1)
    }, [guessedNumList])
    function listChange(user) {
        if (userOneNum !== '' || userTwoNum !== '') {
            const currentNum = user === 1 ? Number(userOneNum) : Number(userTwoNum)
            if (currentNum >= 0 && currentNum <= 9) {
                if (!generalNumsList.includes(currentNum)) {
                    setGeneralNumsList((prev) => ([...prev, currentNum]))
                    if (user === 1) setUserOneNumList((prev) => ([...prev, currentNum]))
                    if (user === 2) setUserTwoNumList((prev) => ([...prev, currentNum]))
                    setActive(!active)
                }
                if (numList.includes(currentNum) && !guessedNumList.includes(currentNum)) setGessedNumList(prev => ([...prev, currentNum]))
            }
            clearInput()
        }
    }

    function clearInput() {
        setUserOneNum('')
        setUserTwoNum('')
    }
    function newGame() {
        setNumList(getNumList())
        clearInput()
        setUserOneNumList([])
        setUserTwoNumList([])
        setGeneralNumsList([])
        setGessedNumList([])
        setWinner('')
        setActive(false)
    }
    return (
        <>
            <div className="box__list box__list--space-around">
                <div className="box__gamer">
                    <h2 className="box__title box__title--margin">Гравець №1</h2>
                    <div className="box__subtitle">Введіть число:</div>
                    <input disabled={winner ? true : active} value={userOneNum} onChange={(e) => setUserOneNum(e.target.value)} type="number" min={0} max={9} className="box__num box__num--input" />
                    <button onClick={() => listChange(1)}>Enter</button>
                    <div className="box__numbers">
                        {userOneNumList.map((el, i) => (
                            <span style={{ color: guessedNumList.includes(el) ? 'green' : 'red' }} className="box__number" key={i}>{el}</span>
                        ))}
                    </div>
                </div>
                <div className="box__gamer">
                    <h2 className="box__title box__title--margin">Гравець №2</h2>
                    <div className="box__subtitle">Введіть число:</div>
                    <input disabled={winner ? true : !active} value={userTwoNum} onChange={(e) => setUserTwoNum(e.target.value)} type="number" min={0} max={9} className="box__num box__num--input" />
                    <button onClick={() => listChange(2)}>Enter</button>
                    <div className="box__numbers">
                        {userTwoNumList.map((el, i) => (
                            <span style={{ color: guessedNumList.includes(el) ? 'green' : 'red' }} className="box__number" key={i}>{el}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ display: winner === '' ? 'none' : 'block' }} className="box__winner">Переміг гравець № {winner}</div>
            <button style={{ display: winner === '' ? 'none' : 'block' }} onClick={newGame} className="box__button-winner">Грати знову</button>
        </>
    )
}

export default GamerBlok;
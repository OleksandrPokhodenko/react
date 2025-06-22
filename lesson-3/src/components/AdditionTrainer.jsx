// import { useEffect, useRef, useState } from "react";

// function AdditionTrainer() {
//     const [trueList, SetTrueList] = useState([])
//     const [falseList, SetFalseList] = useState([])
//     const [secondsCount, setSecondsCount] = useState(9)
//     const [numOne, setNumOne] = useState(0)
//     const [numTwo, setNumTwo] = useState(0)
//     const [userSum, setUserSum] = useState('')
//     const countRef = useRef(0)
//     const [isRunning, setIsRunning] = useState(false)
//     const examplesCountRef = useRef(0)
//     const intervalSecondsRef = useRef(null)
//     const intervalExamplesRef = useRef(null)

//     useEffect(() => {
//         if (isRunning) {
//             intervalExamplesRef.current = setInterval(() => {
//                 nextExamples()
//             }, 10000)
//             if (countRef.current === examplesCountRef.current) clearInterval(intervalSecondsRef.current)
//         }
//     }, [])

//     useEffect(() => {
//         if (isRunning) {
//             intervalSecondsRef.current = setInterval(() => {
//                 setSecondsCount(prev => {
//                     if (prev === 0) return 9
//                     return prev - 1
//                 })
//             }, 1000)
//             if (countRef.current === examplesCountRef.current) clearInterval(intervalExamplesRef.current)
//         }
//     }, [])

//     function randomNum(min = 1, max = 100) {
//         return min + Math.floor(Math.random() * (max - min + 1))
//     }
//     function taskToString(answer) {
//         return `${numOne} + ${numTwo} = ${answer}`
//     }

//     function generateRandomNum() {
//         setNumOne(randomNum())
//         setNumTwo(randomNum())
//     }

//     function answerList() {
//         const sum = numOne + numTwo
//         const setList = sum === parseInt(userSum) ? SetTrueList : SetFalseList
//         setList(prevList => [...prevList, taskToString(userSum)])
//         setUserSum('')
//     }

//     function callBack() {
//         generateRandomNum()
//         countRef.current++
//         setSecondsCount(9)
//         answerList()
//         setUserSum('')
//     }

//     function nextExamples() {
//         answerList()
//         setUserSum('')
//         generateRandomNum()
//         countRef.current++
//     }

//     function start() {
//         if (examplesCountRef.current <= 0) return
//         generateRandomNum()
//         setIsRunning(true)
//     }

//     return (
//         <div className="box">
//             <div className="box__header">
//                 <h2>Задача 13</h2>
//                 <div>Тренажер додавання. Вводимо загальну кількість прикладів і натискаємо на кнопку «Старт».
//                     Після запуску (натисканні на кнопку «Старт») кожні 10 секунд (10 секунд між завданнями)
//                     користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
//                     Формується список  тих, які він відповів правильно, і які він відповів неправильно.
//                     Загальна кількість прикладів вводиться.</div>
//             </div>
//             <div className="box__body">
//                 <div className="box__start">
//                     <label>Введіть кількість прикладів
//                         <input onBlur={e => examplesCountRef.current = parseInt(e.target.value)} type="number" />
//                     </label>
//                     <button onClick={start} className="box__button">Старт</button>
//                 </div>
//                 {
//                     (isRunning) && (
//                         <>
//                             <div className="box__task">
//                                 <div>
//                                     <span>{taskToString(userSum)}?</span>
//                                     <span>{secondsCount}</span>
//                                 </div>
//                                 <label>Ваша відповідь:
//                                     <input value={userSum} onChange={(e) => setUserSum(e.target.value)} type="number" />
//                                 </label>
//                                 <button disabled={countRef.current === examplesCountRef.current} onClick={() => callBack()}>Далі</button>
//                             </div>
//                             <div className="box__lists">
//                                 <div className="box__list">
//                                     <h3>Правильні відповіді</h3>
//                                     <ul>
//                                         {trueList.map((el, ind) =>
//                                             <li key={ind}>{el}</li>
//                                         )}
//                                     </ul>
//                                 </div>
//                                 <div className="box__list">
//                                     <h3>Неправильні відповіді</h3>
//                                     <ul>
//                                         {falseList.map((el, ind) =>
//                                             <li key={ind}>{el}</li>
//                                         )}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 }
//             </div>
//         </div >
//     );
// }

// export default AdditionTrainer;





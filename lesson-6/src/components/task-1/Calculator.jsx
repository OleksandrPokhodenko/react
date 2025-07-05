import { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import Task from "./Task";
import { useMemo } from "react";
function Calculator() {
    const [A, setA] = useState('')
    const [B, setB] = useState('')
    const [counter, setCounter] = useState(0)
    const result = useMemo(() => {
        return Number(A) + Number(B)
    }, [A, B])

    return (
        <div className="box">
            <Task />
            <div className="box__body">
                <label>Введіть число A
                    <input value={A} onChange={(e) => setA(e.target.value)} type="number" />
                </label>
                <label>Введіть число B
                    <input value={B} onChange={(e) => setB(e.target.value)} type="number" />
                </label>
            </div>
            <ResultDisplay result={result}></ResultDisplay>
            <button className="box__button" onClick={() => setCounter(prev => prev + 1)}>counter {counter}</button>
        </div>
    );
}

export default Calculator;
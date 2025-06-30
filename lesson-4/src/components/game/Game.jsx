import RandomNumBlock from "./RandomNumBlock";
import GamerBlok from "./GamerBlok";
import Task from "./Task";
import { useState } from "react";
import { getNumList } from '../../utils/generateNumList'
function Game() {
    const [numList, setNumList] = useState(getNumList())
    const [guessedNumList, setGessedNumList] = useState([])

    return (
        <div className="box">
            <Task />
            <RandomNumBlock numList={numList} guessedNumList={guessedNumList}></RandomNumBlock>
            <GamerBlok numList={numList} guessedNumList={guessedNumList} setGessedNumList={setGessedNumList} setNumList={setNumList}></GamerBlok>
        </div>
    );
}

export default Game;
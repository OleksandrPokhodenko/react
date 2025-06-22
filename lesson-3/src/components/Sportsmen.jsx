import { useState } from "react";
function Sportsmen() {

    const list = [
        {
            id: '1',
            name: "Усейн Болт",
        },
        {
            id: '2',
            name: "Серена Вільямс",
        },
        {
            id: '3',
            name: "Майкл Фелпс",
        },
        {
            id: '4',
            name: "Новак Джокович",
        },
        {
            id: '5',
            name: "Сімона Байлз",
        },
        {
            id: '6',
            name: "Олександр Усик",
        },
    ]
    const [athletesList, setAthletesList] = useState(list)
    const [competitionList, setCompetitionList] = useState([])
    function removeAthletes(id, setFromList) {
        setFromList(prevList => prevList.filter(el => el.id !== id))
    }
    function addAthletes(id, setToList, fromList) {
        let item = fromList.find(el => el.id === id)
        if (item) setToList(prevList => [...prevList, item])
    }
    function callBack(id, fromList, setFromList, setToList) {
        removeAthletes(id, setFromList)
        addAthletes(id, setToList, fromList)
    }
    function outputAthlete(arr, btnName, direction, btnColor, fromList, setFromList, setToList) {
        return (
            <ul className="box__list">
                {arr.map(obj =>
                    <li style={{ flexDirection: direction }} key={obj.id} id={obj.id}>
                        {obj.name}
                        <button className="box__button" onClick={() => callBack(obj.id, fromList, setFromList, setToList)} style={{ backgroundColor: btnColor }}>{btnName}</button>
                    </li>
                )
                }
            </ul >
        )
    }
    return (
        <div className="box">
            <div className="box__header">
                <h2>Задача 5</h2>
                <div>Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.
                    При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
                    При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
                    При натисканні на червону стрілку спортсмен переміщається у загальний список.</div>
            </div>
            <div className="box__body">
                <div className="box__column box__column-big">
                    <h3 className="box__title">Загальний список</h3>
                    {outputAthlete(athletesList, 'forward', 'row', 'green', athletesList, setAthletesList, setCompetitionList)}
                </div>
                <div className="box__column box__column-big">
                    <h3 className="box__title">Обрані для змагання</h3>
                    {outputAthlete(competitionList, 'back', 'row-reverse', 'red', competitionList, setCompetitionList, setAthletesList)}
                </div>
            </div>
        </div>
    );
}

export default Sportsmen;
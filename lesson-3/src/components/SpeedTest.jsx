import { useEffect, useRef, useState } from "react";

function SpeedTest() {
    const [speedAllowedValue, setSpeedAllowedValue] = useState('')
    const [speedСurrentValue, setSpeedСurrentValue] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const intervalRef = useRef(null)
    let speedInPercent = speedСurrentValue / speedAllowedValue * 100
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (speedInPercent > 90) {
                setIsVisible(v => !v)
            }
        }, 1000)
        return () => clearInterval(intervalRef.current)
    }, [speedInPercent])

    function backgroundColorChange() {
        let inputBackgroundColor
        if (speedInPercent) {
            switch (true) {
                case speedInPercent < 50:
                    inputBackgroundColor = 'orange'
                    break;
                case speedInPercent <= 100:
                    inputBackgroundColor = 'green'
                    break;
                case speedInPercent > 100:
                    inputBackgroundColor = 'red'
                    break;
            }
        }
        return inputBackgroundColor
    }
    function inputDisabled() {
        return speedAllowedValue ? false : true
    }

    function outputSpeed(title, speedValue, setSpeedValue, condition) {
        return (
            <>
                <label className="box__label">{title}
                    <input disabled={condition && inputDisabled()} style={{ backgroundColor: condition && backgroundColorChange() }} value={speedValue} onChange={(e) => setSpeedValue(e.target.value)} className="box__input" type="number" />
                    <span>км/год</span>
                </label>
                <div className="box__warning" style={{ display: condition && isVisible ? 'block' : 'none' }}>Увага! Зменшіть швидкість</div>
            </>
        )
    }
    return (
        <div className="box">
            <div className="box__header">
                <h2>Задача 3</h2>
                <div>Вводиться дозволена швидкість і поточна швидкість авто.
                    Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований.
                    Якщо швидкість менше 50% дозволеної, то колір input – оранжевий,
                    якщо від 50% до 100% - зелений, вище 100% - червоний.
                    Якщо значення вище 90% починає блимати повідомлення «Увага!»</div>
            </div>
            <div className="box__body">
                <div className="box__column">
                    {outputSpeed('Введіть дозволену швидкість авто:', speedAllowedValue, setSpeedAllowedValue, false)}
                </div>
                <div className="box__column">
                    {outputSpeed('Введіть поточну швидкість авто:', speedСurrentValue, setSpeedСurrentValue, true)}
                </div>
            </div>
        </div>
    );
}

export default SpeedTest;
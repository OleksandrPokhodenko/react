import Task from "../task-3/Task"
import useWindowSize from "../../hooks/useWindowSize"

function WindowSize() {
    const userWidth = useWindowSize('width')
    const userHeight = useWindowSize('height')
    let imgSrc
    if (userWidth >= 1024) imgSrc = 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG102107.png'
    if (userWidth < 1024 && userWidth > 767) imgSrc = 'https://pngimg.com/uploads/tablet/tablet_PNG8578.png'
    if (userWidth <= 767) imgSrc = 'https://pngimg.com/uploads/smartphone/smartphone_PNG8519.png'

    return (
        <div className="box">
            <Task />
            <div className="box__info">
                viewport width : {userWidth}
            </div>
            <div className="box__info">
                viewport height : {userHeight}
            </div>
            <img className="box__img" src={imgSrc} alt="Image" />
        </div>
    );
}


export default WindowSize
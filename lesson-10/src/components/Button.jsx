import { useNavigate } from 'react-router'

function Button(props) {
    const navigate = useNavigate()
    function getNavigatePath() {
        if (props.navigateFunction) props.navigateFunction()
        else if (props.path) navigate(props.path)
        if (props.deleteFunction) props.deleteFunction()
    }
    return (
        <button type={props.type || 'button'} className={`button button--${props.color}`} style={{
        }} onClick={getNavigatePath}>{props.buttonTitle}</button>
    );
}

export default Button;
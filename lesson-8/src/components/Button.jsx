import { useNavigate } from 'react-router'
function Button(props) {
    const navigate = useNavigate()
    function transitionPathFunction(path) {
        navigate(path)
    }
    return (
        <button className={`button button--${props.color}`} style={{
        }} onClick={() => transitionPathFunction(props.path)}>{props.buttonTitle}</button>
    );
}

export default Button;
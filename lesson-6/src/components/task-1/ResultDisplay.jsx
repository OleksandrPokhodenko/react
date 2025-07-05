import { memo } from "react"
function ResultDisplay({ result }) {
    return (
        <div className="box__result">
            Сума: {result}
        </div>
    )
}

export default memo(ResultDisplay)
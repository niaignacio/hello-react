import './../styles/scriptline.css'

export default function ScriptLine(props){
    return(
        <div className="ScriptLineContainer">
            <div className="Speaker">{props.speaker}:</div>
            <div className="Line">{props.line}</div>
        </div>
    )
}
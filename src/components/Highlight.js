import './../styles/highlight.css'

export default function Highlight(props){
    return(
        <div className="highlightContainer">
            <div className="imgContainer">
                <img src={props.imgsrc} />
            </div>
            <div className="highlightDescription">
                <span className="HighlightDate">{props.date}</span>
                <span className="HighlightTitle">{props.title}</span>
                <span className="HighlightSummary">{props.description}</span>
            </div>
        </div>
    )
}
import {useState, useEffect} from 'react'
import February2025 from './../content/February2025'
import March2025 from './../content/March2025'

export default function CurrentLetter({month}){
    // const[currentMonth, setCurrentMonth] = useState(month)

    return(
        <div>
            {month === "February" ? <February2025 /> : <March2025 />}
        </div>
    )
}
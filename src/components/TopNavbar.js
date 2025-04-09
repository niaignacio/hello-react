import './../styles/navbar.css'

export default function Navbar(){
    return(
        <div>
            <div className="Primary-Navbar">
                <div> the nia network </div>
                <div className="img-container">
                    <img src="https://cloudfilesdm.com/postcards/91452a4df93e450e0f5025faa74bd087.png" />
                </div>
                <div className="img-container">
                    <img src="https://cloudfilesdm.com/postcards/cc9df97c36cdc18883626a480c70090e.png" />
                </div>
                <div className="img-container">
                    <img src="https://cloudfilesdm.com/postcards/c6b319438094394cd73a13ca345d9098.png" />
                </div>
            </div>
            <div className="Secondary-Navbar">
                <ul>
                    <a href="#GoalFollowUps">Goal Follow Ups</a>
                </ul>
            </div>
        </div>
    )
}
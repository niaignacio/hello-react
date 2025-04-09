import './../styles/sidenavbar.css'

export default function SideNavbar({month, setMonth}){

    return(
        <div style={{width: "100%"}}>
            <ul>
                <li className="PrimaryNavbarItem">
                    2025
                </li>
                <li className="SecondaryNavbarItem">
                    <SideNavbarTab month="February" setMonth={setMonth} />
                </li>
                <li className="SecondaryNavbarItem">
                    <SideNavbarTab month="March" setMonth={setMonth} />
                </li>
            </ul>
        </div>
    )
}

function SideNavbarTab({month, setMonth}){
    function handleOnClick(month){
        console.log(`hello from handleOnClick! setting month=${month}`)
        setMonth(month)
    }
    return (
        <div className="sidebar-tab-container">
            <button className="Selected" onClick={() => handleOnClick(month)} > {month} 2025 </button>
        </div>
    )
}
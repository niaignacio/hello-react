import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import SideNavbar from './components/SideNavbar'
import CurrentLetter from './components/CurrentLetter'

function App() {
  const [month, setMonth] = useState("February")
  
  useEffect(() => {
    console.log(`hello from useEffect! month=${month}`)
  }, [month])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Entire-page">
        <div className="Main-body">
          <CurrentLetter month={month} setMonth={setMonth}/>
        </div>
      </div>
    </div>
  );
}

export default App;

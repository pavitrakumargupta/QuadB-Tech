import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import telegram from "./telegram.png"
function App() {

  const [list,setList]=useState([])
  const [timer,setTimer]=useState(60)

  const fetchData=async()=>{
    const {data}=await axios.get("http://localhost:5000/getInfo");
    console.log(data);
    setList(data)
  }

  useEffect(()=>{
    fetchData()
      let time=60
      setInterval(()=>{
        setTimer(time)
        console.log(time)
        time=time-1
        if(time===0){
          time=60
        }
      },1000)
    },[60000])

  useEffect(()=>{},[timer]) 

  const [isChecked, setIsChecked] = useState(true);

  
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };



  return (
    <div className="App">
      <nav>
        <img className='logo' src="	https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="" />
        <div className='options'>
          <select name="" id="">
            <option value="">INR</option>
          </select>
          <select name="" id="">
            <option value="">BTC</option>
          </select>
          <button>
          BUY BTC
          </button>
           
        </div>
        <div className='rightHeader'>
          <p className='timer'   >{timer}</p>
          <button className='telegrambtn'>
            <img src={telegram} alt="" />
            <p>Connect Telegram</p>
          </button>
          
          <label className="switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />
            <span className="slider round"></span>
          </label>
       </div>
      </nav>
      <div className='headerWrapper'>
        <h6>Best Price to Trade</h6>
        <div className='figures'>
          <div>
             <p>0.68 %</p>
             <span>5 Mins</span>
          </div>
          <div>
             <p>1.26 %</p>
             <span>1 Hour</span>
          </div>
          <div>
             <h2>₹ 24,24,394</h2>
             <span>Average BTC/INR net price including commission</span>
          </div>
          <div>
             <p>9.54 %</p>
             <span>1 Day</span>
          </div>
          <div>
             <p>10.53 %</p>
             <span>7 Days</span>
          </div>
        </div>
      </div>
      <table className='list'>
        <tbody>
          <tr className='header'>
            <th>#</th>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Volume</th>
            <th>Base Unit</th>
          </tr>
          {list?.map((key, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{key.name}</td>
              <td>{key.last}</td>
              <td>{`₹ ${key.buy} / ₹ ${key.sell}`}</td>
              <td>{key.volume}</td>
              <td>{key.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
          
      <footer>
            <p>Copyright &copy; 2019{'\u00A0\u00A0\u00A0\u00A0'}HodlInfo.com</p>
            <p>Support</p>
      </footer>

      <div className='fixed-footer'>
            <button>Add hodlinfo to home screen</button>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import { bubbleSort } from "./bubbleSort";


function App() {
  const [numbers, setNumbers] = useState([]);
  const [idx, setIDX] = useState({});
  const [speed, setSpeed] = useState(10);

  useEffect(() => {
    generateRandomArray();
  }, [])






  const generateRandomArray = () => {
    let array = [];
    for (let i = 0; i < 200; i++) {
      let x = Math.floor((Math.random() * 100) + 1);
      array.push(x);
    }
    setNumbers(array);
  }

  return (
    <>
      <div className='row margin'>
        <button className="button-margin" onClick={generateRandomArray}>Generate New Array</button>
        <label for="speed">Speed</label>
        <select name="speed" onChange={(e) => {
          setSpeed(e.target.value);
        }}>
          <option value={10}>10ms</option>
          <option value={50}>50ms</option>
          <option value={250}>250ms</option>
          <option value={500}>500ms</option>
          <option value={1000}>1s</option>



        </select>
        <button className="button-margin" onClick={() => {
          bubbleSort(numbers, setNumbers, setIDX, speed)
        }}>Bubble Sort</button>
      </div>
      <div className='row'>

        {
          numbers?.map((item, index) => {
            if (index == idx?.first || index == idx?.second) {
              return <Bar item={item} color={"blue"}></Bar>
            }
            else {
              return <Bar item={item} color={"lightcoral"} ></Bar>
            }

          })
        }
      </div>
    </>

  );
}

export default App;

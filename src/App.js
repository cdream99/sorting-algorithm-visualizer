import React, { useState, useEffect } from "react";
import { BUBBLE_SORT, SPEEDS, GENERATE_RANDOM_ARRAY } from "./util";
import BarContainer from "./BarContainer";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [idx, setIDX] = useState({});
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    GENERATE_RANDOM_ARRAY(setNumbers);
  }, []);

  return (
    <>
      <div className="flex-align-items">
        <button onClick={() => GENERATE_RANDOM_ARRAY(setNumbers)}>
          Generate New Array
        </button>
        <div className="speed-container">
          <span>Speed</span>
          <select
            defaultValue={speed}
            value={speed}
            onChange={(e) => {
              setSpeed(e.target.value);
            }}
          >
            {SPEEDS?.map((item) => (
              <option value={item?.value}>{item?.label}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            BUBBLE_SORT(numbers, setNumbers, setIDX, speed);
          }}
        >
          Bubble Sort
        </button>
      </div>
      <BarContainer numbers={numbers} idx={idx} />
    </>
  );
}

export default App;

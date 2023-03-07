export const GENERATE_RANDOM_ARRAY = (setNumbers) => {
  let array = [];
  for (let i = 0; i < 150; i++) {
    let x = Math.floor(Math.random() * 80 + 1);
    array.push(x);
  }
  setNumbers(array);
};
export const BUBBLE_SORT = async (numbers, setNumbers, setIDX, speed) => {
  const arr = numbers;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      setIDX({ first: j, second: j + 1, swapping: false });
      if (arr[j] > arr[j + 1]) {
        setNumbers([...arr]);
        await SLEEP(speed);
        setIDX({ first: j, second: j + 1, swapping: true });
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        setNumbers([...arr]);
        await SLEEP(speed);
      }
      setIDX((prev) => ({ ...prev, swapping: false }));
    }
  }
  setIDX({});
};
export const SPEEDS = [
  {
    value: 10,
    label: "10ms",
  },
  {
    value: 50,
    label: "50ms",
  },
  {
    value: 250,
    label: "250ms",
  },
  {
    value: 500,
    label: "500ms",
  },
  {
    value: 1000,
    label: "1s",
  },
  {
    value: 2000,
    label: "2s",
  },
];
function SLEEP(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

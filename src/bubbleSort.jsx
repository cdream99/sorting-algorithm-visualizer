export const bubbleSort = async (numbers, setNumbers, setIDX, speed) => {
    const arr = numbers;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                setIDX({ first: j, second: j + 1 });
                setNumbers([...arr]);
                await sleep(speed);


                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                setNumbers([...arr]);


                await sleep(speed);
            }
        }
    }
    setIDX({});

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


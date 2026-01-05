import React, { useState, useCallback, useMemo, Suspense, lazy } from "react";

const Counter = lazy(() => import("./Counter"));

const App = () => {
    // const [counter, setCount] = useState(0);
    // const increment = useCallback(() => setCount((currentCounter) => currentCounter + 1), [setCount]);

    // memorization
    let count = 0;
    let memo = [];
    function displayData() {
        if (memo[count] === undefined) {
            for (let i = 0; i < 1000000000; i++) {
                count = i;
            }
            memo[count] = count;
            return count;
        } else {
            return memo[count];
        }
    }

    console.time();
    console.log(displayData());
    console.log(displayData());
    console.timeEnd();
    return (
        <div>
            {/* <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Counter />
            </Suspense> */}
        </div>
    );
};

export default App;

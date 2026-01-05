import React, { useState, useCallback, useMemo, Suspense, lazy } from "react";

const Counter = lazy(() => import("./Counter"));

const App = () => {
    const [counter, setCount] = useState(0);
    const increment = useCallback(() => setCount((currentCounter) => currentCounter + 1), [setCount]);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Counter />
            </Suspense>
        </div>
    );
};

export default App;

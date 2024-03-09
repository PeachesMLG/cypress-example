import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>You have clicked {count} times</p>
        </div>
    );
}

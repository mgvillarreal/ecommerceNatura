import React from 'react';
import { useState } from 'react';

const button = ({text, fn}) => {
    const [count, setCount] = useState(0)

    {/*const click = () => {
        setCount(count+1);
        fn(count);
    }*/}

    return (
        <button onClick={fn} className="px-4 py-2 rounded bg-rosa text-white hover:bg-bordo">
            {text}
        </button>
    );
}

export default button
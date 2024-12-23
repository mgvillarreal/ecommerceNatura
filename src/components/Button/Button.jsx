import React from 'react';

const button = ({text, fn, color}) => {
    return (
        <button onClick={fn} className={`px-4 py-2 rounded bg-${color} text-white hover:font-semibold`}>
            {text}
        </button>
    );
}

export default button
import React from 'react'
import { useState } from 'react'

const button = ({text, color, fn}) => {
    const [count, setCount] = useState(0)

    const click = () => {
        setCount(count+1);
        fn(count);
    }

    return (
        <button style={{backgroundColor:color}} onClick={()=>click()}>{text}</button>
    )
}

export default button
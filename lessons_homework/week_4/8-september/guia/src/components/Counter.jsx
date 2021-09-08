import React, {useState} from 'react'

export const Counter = () => {
    let value = 100
    const [counter, setCounter] = useState(value)

    const handleSubtract = () => {setCounter(counter - 1)}
    const handleReset = () => {setCounter(value)}
    const handleAdd = () => {setCounter(counter + 1)}

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button type="button"
                onClick={handleSubtract}
            >
                Restar
            </button>
            <button type="button"
                onClick={handleReset}
            >
                Reset
            </button>
            <button type="button"
                onClick={handleAdd}
            >
                Sumar
            </button>
            
        </div>

    )
}
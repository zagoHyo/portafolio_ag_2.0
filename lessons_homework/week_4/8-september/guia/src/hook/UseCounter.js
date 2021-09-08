import {useState} from "react";

const useCounter = (value = 100) => {
    const [counter, setCounter] = useState(value)

    const handleSubtract = () => {setCounter(counter - 1)}
    const handleReset = () => {setCounter(value)}
    const handleAdd = () => {setCounter(counter + 1)}


    return{
        counter,
        handleSubtract,
        handleAdd,
        handleReset
    }
}

export default useCounter
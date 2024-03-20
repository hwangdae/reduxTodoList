import { useState } from "react"

export const useInput = <T>(init:any)=> {
    const [inputValue,setInputValue] = useState(init);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return [inputValue,handleChange]
}
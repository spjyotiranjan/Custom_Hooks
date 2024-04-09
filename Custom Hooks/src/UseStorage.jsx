import { useEffect, useState } from "react"

const getText = (key,value) => {
    const localValue = localStorage.getItem(key)
    const sessionValue = sessionStorage.getItem(key)
    if(localValue){
        return localValue
    }
    if (sessionValue) {
        return sessionValue
    }
    return value
}

const UseStorage = (key,value) => {
    const [text,setText] = useState(()=>getText(key,value))

    useEffect(()=>{
        localStorage.setItem(key,text)
        sessionStorage.setItem(key,text)
    },[key,text])

    return [text,setText]
}

export default UseStorage
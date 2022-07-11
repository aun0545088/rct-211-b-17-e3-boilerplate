import { useState } from "react";

export const useCounter = (init) => {
    const [value,setValue] = useState(init)
    const [count,setCount] = useState(value.initialValue) 
        
    const incCount = (n)=>{
        if(!n){
            n = 1
        }
        if(count > value.maxValue-n){
            return
        }
        return setCount((prev)=>prev + n)
    }
    const decCount = (n)=>{
        if(!n){
            n = 1
        }
        if(count < value.minValue+n){
            return
        }
        return setCount((prev)=>prev - n)
    }
    return {count,incCount,decCount}
};

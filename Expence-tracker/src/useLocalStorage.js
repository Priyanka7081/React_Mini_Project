import { useState, useEffect } from "react";

export default function useLocalStorage(key,initialValue){
    const[state,setState] = useState(()=>{
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : initialValue;
        } catch (error) {
            console.log("useLocalStorage read Error",error);
            return initialValue;
            
            
        }
    });
    useEffect(()=>{
        try {
           localStorage.setItem(key,JSON.stringify(state)); 
        } catch (error) {
            console.log('useLocalStorage write error', error);
            
            
        }
    },[key,state]);
    return[state,setState];
}
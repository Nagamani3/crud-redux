import { useState } from "react";
import { useEffect } from "react";

export default function useDarkMode(){
    const [theme,setTheme]=useState('dark')
    const colorTheme = theme === 'dark'?'light':'dark'
    useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        console.log("root",root)
    },[theme])
    return [colorTheme,setTheme]

}
import React from 'react'
import useDarkMode from '../hook/useDarkmode';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Toggle = () => {
    let [colorTheme, setTheme] = useDarkMode();
  return (
    <div onClick={() => setTheme(colorTheme)} className='text-right'>
    {colorTheme === "light" ? (
      <p className="text-4xl dark:text-slate-400">
        <CiLight/>
      </p>
    ) : (
      <p className="text-4xl text-slate-500">
        <CiDark/>
      </p>
    )}
  </div>
  )
}

export default Toggle

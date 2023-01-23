import React from 'react'

const Input = ({inputProps,values,onChange}) => {
  return (
    <input value={values} onChange={onChange} {...inputProps} className='bg-slate-200 dark:bg-slate-200 w-[30%] h-12 rounded-md outline-none p-2 sm:w-[70%] sm:m-5 focus:shadow-xl'/>
  )
}

export default Input

import React from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick} className='bg-gradient-to-r from-fuchsia-800 to-sky-400 text-slate-200 rounded-md w-44 h-10 text-lg capitalize sm:mt-6 cursor-pointer shadow-lg shadow-slate-500 dark:shadow-lg dark:shadow-slate-700'>{children}</button>;
};

export default Button;

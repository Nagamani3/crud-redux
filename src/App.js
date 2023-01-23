import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Backbutton from "./components/backbutton";
import Toggle from "./components/toggle";
import Create from "./pages/Create";
import Crud from "./pages/Crud";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 h-[100vh] ">
      <h1 className="text-center pt-7 w-[40] font-bold text-3xl m-3 text-slate-700 dark:text-slate-400 capitalize">
        Crud using redux tool kit
      </h1>
      <div className=" flex justify-between mr-10 sm:mt-5">
        <Link to="/">
          <Backbutton />
        </Link>
        <Toggle />
      </div>
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/add" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
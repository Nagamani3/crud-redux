import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "./../components/Button";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addArtist } from "./Slice";
const Create = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let array = []
  const [data, setData] = useState({
    artist: "",
    artWork: "",
  });
  const [all,setAll]=useState([])
  const handleAdd = () => {
    setData({ artist: "", artWork: "" });
    let id=uuidv4()
    dispatch(
      addArtist({
        id: id,
        artist: data.artist,
        artWork: data.artWork,
      })
    );
setAll({
    id: id,
    artist: data.artist,
    artWork: data.artWork,
  })
    window.localStorage.setItem("wow",JSON.stringify(all))
    
    navigate("/");
  };
  return (
    <div className="flex-col h-44 items-center mt-12 capitalize md:flex-col sm:flex">
      <p className="text-xl text-center font-bold dark:text-slate-400 text-slate-700">Create artists here</p>
      <div className='items-center flex justify-around mt-8 md:flex sm:flex-col sm:w-[100%]  '>
        <Input
          inputProps={{ type: "text", placeholder: "artist name here" }}
          values={data.artist}
          onChange={(e) => setData({ ...data, artist: e.target.value })}
        />
        <Input
          inputProps={{ type: "text", placeholder: "artwork here" }}
          values={data.artWork}
          onChange={(e) => setData({ ...data, artWork: e.target.value })}
        />
        <Button onClick={handleAdd} >submit</Button>
      </div>
    </div>
  );
};

export default Create;

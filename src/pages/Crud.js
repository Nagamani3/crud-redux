import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FaUserEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteArtist } from "./Slice";

const Crud = () => {
  const dispatch = useDispatch();

  let temp = useSelector((store) => store.artists);

  const handleDelete = (id) => {
    console.log("ididdi", id);
    dispatch(deleteArtist(id));
  };

  return (
    <div>
      <div className="lg:px-14 md:px-14 sm:px-28 py-7 px-14 flex justify-between sm:pr-9">
        <div>
          <Link to={"/add"}>
            <Button>add artists</Button>
          </Link>
        </div>
      </div>

      <div className="lg:flex md:flex sm:flex flex justify-center ">
        {temp.length ? (
          <div className="grid grid-cols-3 w-[70%] h-auto gap-3 mt-7 md:grid sm:grid md:w-[70%] sm:w-[70%] lg:w-[70%] md:grid-cols-2 sm:grid-cols-1 ">
            {temp.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md  p-4 capitalize w-auto shadow-2xl shadow-slate-500 dark:shadow-lg dark:shadow-slate-700"
              >
                <h3 className=" text-slate-200 text-2xl">{item.artist}</h3>
                <div className="flex justify-between ">
                  <p className="text-slate-300 text-lg">{item.artWork}</p>
                  <div className="flex justify-between items-center ">
                    <Link to={`edit/${item.id}`}>
                      <p className="text-slate-700 text-2xl cursor-pointer">
                        <FaUserEdit />
                      </p>
                    </Link>
                    <p
                      onClick={() => handleDelete(item.id)}
                      className="text-slate-200  text-2xl m-2 cursor-pointer"
                    >
                      <FiDelete />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="dark:text-slate-400 text-slate-700">oops!!! no artists found</p>
        )}
      </div>
    </div>
  );
};

export default Crud;

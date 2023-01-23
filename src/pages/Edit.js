import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Input';
import Button from './../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { editArtist } from './Slice';

const Edit = () => {
    let dispatch = useDispatch()
    let params = useParams()
    console.log("params",params)
    let navigate = useNavigate()
    let temp = useSelector(store=>store.artists)
    let existingArtist = temp.filter(art => art.id === params.id)
    console.log("existingArtist[0]",existingArtist[0])
    const {artist,artWork}=existingArtist[0]
    
    const [data,setData]=useState({
        artist,
        artWork
    })
    
    const handleEdit =()=>{
      
        dispatch(editArtist({
            id:params.id,
            artist:data.artist,
            artWork:data.artWork
        }))
        
        navigate('/')

    }
  return (
    <div className="flex-col h-44 items-center mt-12 capitalize md:flex-col sm:flex">
        <p className='text-xl text-center font-bold  dark:text-slate-400 text-slate-700'>edit artists here</p>
        <div className='items-center flex justify-around mt-8 md:flex sm:flex-col sm:w-[100%] '><Input inputProps={{type:"text",placeholder:"artist name here"}}
        values ={data.artist} onChange={(e)=> setData({...data ,artist:e.target.value})}/>
        <Input inputProps={{type:"text",placeholder:"artwork here"}}
        values ={data.artWork} onChange={(e)=> setData({...data ,artWork:e.target.value})}/>
        <Button onClick={handleEdit}>edit</Button></div>

    </div>
    
  )
}

export default Edit
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'


export default function Countres() {
   let params = useParams()
   const navigate = useNavigate()
    
   const [data, setData] = useState([]);
   const dataFetch = async () => {
     try {
       const respons = await axios.get(`https://restcountries.com/v3.1/name/${params.name}`);
       setData(respons.data);
     } catch (error) {
       console.error(error);
     }
   };
   useEffect(() => {
     dataFetch();
   }, []);
    
   const homeBtn=()=> {
      navigate('/')
   }
   
  return (
      <div className='flex items-center justify-center '>
       {
        data.map((info,index) => {
            return(
              <div className='flex items-center justify-center' key={index}>
                <button onClick={homeBtn}><i className="fa-solid fa-arrow-left text-green-800 text-[50px] mr-[50px]"> </i></button>
                <div className="bg-[#00000080] text-white m-3 px-10 py-3 w-[500px] mt-8 rounded-xl">
                <img
                  className="w-[450px] h-[350px]"
                  src={info.flags.svg}
                  alt="countres"
                />
                <h2 className="text-center text-[32px] mt-2">
                  {info.name.common}
                </h2>
                <p className="text-xl text-slate-100-950 mt-2 mb-2">
                  Capital: {info.capital}
                </p>
                <p>Population:  {info.population}</p>
                <p>Region:  {info.region}</p>
                <p>Status: {info.status}</p>
                <p>subregion: {info.subregion}</p>
              </div>
              </div>
            )
        })
       }
      </div>
  )
}

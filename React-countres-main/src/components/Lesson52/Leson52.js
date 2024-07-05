import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leson52 = () => {
  const [data, setData] = useState([]);
  const dataFetch = async () => {
    try {
      const respons = await axios.get("https://restcountries.com/v3.1/all");
      setData(respons.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);

  const handekclick = async (e) => {
    if (e.target.value === "all") {
      const respons = await axios.get("https://restcountries.com/v3.1/all");
      setData(respons.data);
    } else {
      const respons = await axios.get(
        `https://restcountries.com/v3.1/name/${e.target.value}`
      );
      setData(respons.data);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-5 mt-10 mb-8">
        <button
          value={"uzbekistan"}
          onClick={handekclick}
          className="bg-green-500 text-white p-2 text-[18px] rounded-xl"
        >
          O'zbekiston
        </button>

        <button
          onClick={handekclick}
          value={"germany"}
          className="bg-blue-500 text-white text-[18px] p-2 rounded-xl"
        >
          Germaniya
        </button>
        <button
          onClick={handekclick}
          value={"all"}
          className="bg-slate-600 text-white p-2 text-[18px] rounded-xl"
        >
          All Countres
        </button>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        {data.map((info, index) => {
          console.log(info);
          return (
         <Link to={`/countres/${info.name.common}`}>       
              <div key={index}>
              <div className="bg-[#00000080] text-white m-3 px-10 py-3 w-[400px] h-[400px] rounded-xl">
                <img
                  className="w-[350px] h-[250px]"
                  src={info.flags.svg}
                  alt="countres"
                />
                <h2 className="text-center text-[32px] mt-2">
                  {info.name.common}
                </h2>
                <p className="text-xl text-slate-100-950 mt-2 mb-2">
                  Capital: {info.capital}
                </p>
                <p>Population: {info.population}</p>
              </div>
            </div>
         </Link>
          );
        })}
      </div>
    </>
  );
};

export default Leson52;

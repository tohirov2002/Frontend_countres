import { useState } from "react";
import "./Assets/main.css"
import Leson52 from "./components/Lesson52/Leson52";
import { BrowserRouter,Routes,Rote, Route } from "react-router-dom";
import Countres from "./components/CountresDetail/Countres";

export default function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={  <Leson52/>}/>
      <Route path="/countres/:name" element={<Countres/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

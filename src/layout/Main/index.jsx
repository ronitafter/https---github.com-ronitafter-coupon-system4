import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Coupons from "../Coupons/Coupons";
import Login from "../Login/Login";

export const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
}
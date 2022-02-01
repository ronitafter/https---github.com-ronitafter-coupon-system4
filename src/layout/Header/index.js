import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) =>{
  
   return (<header>
      header
      <h1>header</h1>
     <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/coupons">Coupons</Link>
        <Link to="/login">Login</Link>
      </nav>
      </header>);
}
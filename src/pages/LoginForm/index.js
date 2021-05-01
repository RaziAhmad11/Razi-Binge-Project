import React from 'react';
import Header from '../../components/header/index.js';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import img from "./google.jpg"

export default function LoginForm() 
{
	return(
		<>
		<Header  status="Home"/>
		<div className="outer">
		<div className="left" data-aos="fade-left">
		<div className="text1">WELCOME BACK!</div>
		<div className="lite">To the digital world of entertainment</div>
		</div>
		<div className="right">
		<div className="outerfade">
		<div className="form" data-aos="zoom-in">
		<div className="text1">Sign In</div>
		<div className="inputs">
		<input type="email" placeholder="Email:" required></input><br/>
		<input type="password" placeholder="Password:" required></input>
		</div>
		<Link to="/dashboard" className="link"><div type="submit" className="loginbutton">Log In</div></Link>
		<br/>
		<p>OR</p>
		<br/>
		<div className="icons">
		<img src={img}></img>
		<Link to="/dashboard" className="link"><div className="logotext">Login with Google</div></Link>
		</div>
		</div>
		</div>
		</div>
		</div>
		</>
	);
}
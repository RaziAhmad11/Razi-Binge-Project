import React from 'react';
import Header from '../../components/header/index.js';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() 
{
	return(
		<>
		<Header  status="Sign In"/>
		<div className="text" data-aos="fade-up">Unlimited Movies, TV Shows & a lot More..<br/>
		<div className="lite" data-aos="fade-up">JUST BINGE AND CHILL</div>
		<Link to="/login" className="link"><button className="join">JOIN NOW FOR FREE!</button></Link>
		</div>
		</>
	);
}
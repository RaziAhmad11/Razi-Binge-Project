import React from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header(props) 
{
	var link;
	if(props.status=="Sign In")
	{
		link="/login";
	}
	else
	{
		link="/";
	}
	return(
		<div className="header">
		<Link to = "/" className="link"><div className="logo">Binge</div></Link>
		<Link to = {link} className="link"><button className="login">{props.status}</button></Link>
		</div>
	);
}
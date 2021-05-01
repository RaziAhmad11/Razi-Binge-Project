import React from 'react';
import './styles.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

export default function MovieTop(props) 
{
	console.log(props.movie);
	const path1 = "https://image.tmdb.org/t/p/original";
	const path2 = String(props.poster);
	const path5 = String(props.backdrop);
	var path3 = null;
	var path4 = null;
	path3 = path1.concat(path2);
	path4 = path1.concat(path5);
	
	return(
		<div className="top-bg" style = {{backgroundImage: `url(${path4})`}}>
		<div className="left-top">
		<div className="title-top" data-aos="zoom-in">{props.title}</div>
		<br/>
		<div className="overview-top">Release Date: {props.date}</div>
		<br/>
		<div className="overview-top">{props.overview}</div>
		<br/>
		<div className="button-top">Watch Now</div>
		</div>
		<div className="right-top" data-aos="fade-right">
		<img src={path3}></img>
		</div>
		</div>
		);
	}
import React from 'react';
import './styles.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom'

export default function MovieCard(props) 
{
	const history = useHistory();
	const path1 = "https://image.tmdb.org/t/p/original";
	const path2 = String(props.movie.backdrop_path);
	var path3 = null;
	path3 = path1.concat(path2);

	function movieDetail(){
		history.push({
			pathname: '/movie',
			state: { movie: props.movie }
		});
	}
	
	return(
		<div className="outer-similar" onClick={movieDetail}>
		<img src={path3}></img>
		<div className="similar-title">{props.movie.title}</div>
		</div>
		);
}
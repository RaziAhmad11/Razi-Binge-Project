import React from 'react';
import Similar from '../../components/similar/index.js';
import Header from '../../components/header/index.js';
import './styles.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { useLocation } from "react-router-dom";

import facebook from "./facebook.png"
import whatsapp from "./whatsapp.png"
import instagram from "./instagram.png"

export default function MovieDetail() 
{
	const location = useLocation();
	const [movies,setMovie]=React.useState([{"title":"Mortal Kombat","poster_path":"/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg","overview":"Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.","backdrop_path":"/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg","release_date":"2021-04-07"}]);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const posterurl=`https://image.tmdb.org/t/p/original${location.state.movie.poster_path}`;
	const backdropurl=`https://image.tmdb.org/t/p/original${location.state.movie.backdrop_path}`;
	const [tab,setTabs]=React.useState(1);
	const [modalShow,setModalShow]=React.useState(false);

	React.useEffect(() => {

		fetch(`https://api.themoviedb.org/3/movie/${location.state.movie.id}/similar?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`)
		.then(res => res.json())
		.then(
			(result) => {
				setMovie(result.results);
				setIsLoaded(true);
				setMovie(movies.slice(0,3));
			},
			(error) => {
				console.log(error);
			}
			)
	}, [isLoaded])
	console.log(location.state.movie);

	function changeOne()
	{
		setTabs(1);
	}

	function changeTwo()
	{
		setTabs(2);
	}

	function changeThree()
	{
		setTabs(3);
	}

	function changeThree()
	{
		setTabs(3);
	}


	function showModal()
	{
		setModalShow(true);
	}

	function hideModal()
	{
		setModalShow(false);
	}

	return(
		<>
		<Header  status="Logout"/>
		<div className="modal-box" style={{display: (modalShow) ? 'block':'none'}}>
		<div class="modal-content">
		<span class="close" onClick={hideModal}>&times;</span>
		<p>Great! It's good to share.</p>
		</div>
		</div>
		<div className="outer-detail"  style = {{backgroundImage: `url(${backdropurl})`}}>
		<div className="left-detail" data-aos="fade-left">
		<div className="social-media">
		<img src={facebook} onClick={showModal}/>
		<img src={whatsapp} onClick={showModal}/>
		<img src={instagram} onClick={showModal}/>
		</div>
		<img src={posterurl}/>
		</div>
		<div className="right-detail">
		<div className="title-text" data-aos="zoom-in">{location.state.movie.title}</div>
		<div className="detail-mid" data-aos="fade-right">
		<div className="detail-tabs">
		<div className="labelone" onClick={changeOne} style={{borderBottom: (tab==1) ? '4px solid red':'none'}}>Overview</div>
		<div className="labeltwo" onClick={changeTwo} style={{borderBottom: (tab==2) ? '4px solid red':'none'}}>Release Date</div>
		<div className="labelthree" onClick={changeThree} style={{borderBottom: (tab==3) ? '4px solid red':'none'}}>Rating</div>
		</div>
		<div className="one" style={{display: (tab==1) ? 'block':'none'}} >{location.state.movie.overview}</div>
		<div className="two" style={{display: (tab==2) ? 'block':'none'}}>In theaters from: <br/>{location.state.movie.release_date}</div>
		<div className="three" style={{display: (tab==3) ? 'block':'none'}}>Ratings: {location.state.movie.vote_average}/10</div>
		</div>
		<div className="similar-detail">
		{movies.map(item => (
			<Similar movie={item} />
			))}
		</div>
		</div>
		</div>
		</>
		);
}
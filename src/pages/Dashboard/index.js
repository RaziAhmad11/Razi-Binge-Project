import React from 'react';
import MovieTop from '../../components/movietop/index.js';
import MovieCard from '../../components/moviecard/index.js';
import Header from '../../components/header/index.js';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Dashboard() 
{
	const [movies,setMovie]=React.useState([{"title":"Mortal Kombat","poster_path":"/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg","overview":"Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.","backdrop_path":"/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg","release_date":"2021-04-07"}]);
	const [isLoaded, setIsLoaded] = React.useState(false);

	React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.results[0]);
        setMovie(result.results);
        setIsLoaded(true);
      },
      (error) => {
        console.log(error);
      }
      )
  }, [isLoaded])

	return(
		<>
		<Header  status="Logout"/>
		<div className="wrapper">
		<MovieTop title={movies[0].title} poster={movies[0].poster_path} backdrop={movies[0].backdrop_path} overview={movies[0].overview} date={movies[0].release_date}/>
		<div className="wrapper-inner">
		{movies.map(item => (
      	<MovieCard movie={item} />
      ))}
		</div>
		</div>
		</>
	);
}
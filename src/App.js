import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from './pages/Home/index.js';
import LoginForm from './pages/LoginForm/index.js';
import Dashboard from './pages/Dashboard/index.js';
import MovieDetail from './pages/MovieDetail/index.js';

function App() {
  AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false
});
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={LoginForm}/>
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/movie" component={MovieDetail}/>
    </Switch>
    </Router>
    );
}

export default App;
